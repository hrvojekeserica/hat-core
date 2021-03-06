from pathlib import Path
import argparse
import asyncio
import contextlib
import functools
import importlib
import logging.config
import sys

import appdirs

from hat import util
from hat.gui import common
from hat.util import aio
from hat.util import json
import hat.event.client
import hat.event.common
import hat.gui.common
import hat.gui.server
import hat.gui.view
import hat.monitor.client
import hat.monitor.common


package_path = Path(__file__).parent
user_conf_dir = Path(appdirs.user_config_dir('hat'))

default_ui_path = package_path / 'ui'
default_conf_path = user_conf_dir / 'gui.yaml'


def main():
    """Main"""
    aio.init_asyncio()

    args = create_parser().parse_args()
    conf = json.decode_file(args.conf)
    json_schema_repo = json.SchemaRepository(
        hat.gui.common.json_schema_repo, *args.additional_json_schemas_paths)
    json_schema_repo.validate('hat://gui/main.yaml#', conf)

    for adapter_conf in conf['adapters']:
        module = importlib.import_module(adapter_conf['module'])
        json_schema_id = module.json_schema_id
        if json_schema_id:
            json_schema_repo.validate(json_schema_id, adapter_conf)

    logging.config.dictConfig(conf['log'])

    with contextlib.suppress(asyncio.CancelledError):
        aio.run_asyncio(async_main(conf, args.ui_path, json_schema_repo))


async def async_main(conf, ui_path, json_schema_repo):
    """Async main

    Args:
        conf (json.Data): configuration defined by ``hat://gui/main.yaml#``
        ui_path (pathlib.Path): web ui directory path
        json_schema_repo (json.SchemaRepository): json schema repository

    """
    run_cb = functools.partial(run_with_monitor, conf, ui_path,
                               json_schema_repo)
    await hat.monitor.client.run_component(conf['monitor'], run_cb)


async def run_with_monitor(conf, ui_path, json_schema_repo, monitor):
    """Run with monitor client

    Args:
        conf (json.Data): configuration defined by ``hat://gui/main.yaml#``
        ui_path (pathlib.Path): web ui directory path
        json_schema_repo (json.SchemaRepository): json schema repository
        monitor (hat.monitor.client.Client): monitor client

    """
    subscriptions = set()
    for adapter_conf in conf['adapters']:
        module = importlib.import_module(adapter_conf['module'])
        if module.event_type_prefix is not None:
            subscriptions.add(tuple(module.event_type_prefix + ['*']))

    run_cb = functools.partial(run_with_event, conf, ui_path, json_schema_repo)
    await hat.event.client.run_client(
        monitor, conf['event_server_group'], run_cb, list(subscriptions))


async def run_with_event(conf, ui_path, json_schema_repo, client):
    """Run with event client

    Args:
        conf (json.Data): configuration defined by ``hat://gui/main.yaml#``
        ui_path (pathlib.Path): web ui directory path
        json_schema_repo (json.SchemaRepository): json schema repository
        client (hat.event.client.Client): event client

    """
    async_group = aio.Group()

    try:
        factory = AdapterEventClientFactory(client)
        async_group.spawn(aio.call_on_cancel, factory.async_close)

        adapters = {}
        for adapter_conf in conf['adapters']:
            name = adapter_conf['name']
            if name in adapters:
                raise Exception(f'adapter name {name} not unique')
            module = importlib.import_module(adapter_conf['module'])
            adapter_event_client = factory.create(module.event_type_prefix)
            adapter = await module.create(adapter_conf, adapter_event_client)
            async_group.spawn(aio.call_on_cancel, adapter.async_close)
            adapters[name] = adapter

        views = await hat.gui.view.create_view_manager(conf['views'],
                                                       json_schema_repo)
        async_group.spawn(aio.call_on_cancel, views.async_close)

        server = await hat.gui.server.create(conf['server'], ui_path,
                                             adapters, views)
        async_group.spawn(aio.call_on_cancel, server.async_close)

        await asyncio.wait([adapter.closed for adapter in adapters.values()] +
                           [views.closed, server.closed],
                           return_when=asyncio.FIRST_COMPLETED)
    finally:
        await aio.uncancellable(async_group.async_close())


class AdapterEventClientFactory:
    """Adapter event client factory

    Args:
        client (hat.event.client.Client): event client

    """

    def __init__(self, client):
        self._client = client
        self._queues = []
        self._async_group = aio.Group()
        self._async_group.spawn(self._receive_loop)

    @property
    def closed(self):
        """asyncio.Future: closed future"""
        return self._async_group.closed

    async def async_close(self):
        """Async close"""
        await self._async_group.async_close()

    def create(self, event_type_prefix):
        """Create adapter event client

        Args:
            event_type_prefix (hat.event.common.EventType): event_type_prefix

        Returns:
            common.AdapterEventClient

        """
        queue = aio.Queue()
        self._async_group.spawn(aio.call_on_cancel, queue.close)
        if event_type_prefix is not None:
            self._queues.append((event_type_prefix, queue))
        return _AdapterEventClientImpl(self._client, queue)

    async def _receive_loop(self):
        try:
            while True:
                events = await self._client.receive()
                for prefix, queue in self._queues:
                    filtered_events = [
                        event for event in events
                        if event.event_type[:len(prefix)] == prefix]
                    if filtered_events:
                        queue.put_nowait(filtered_events)
        finally:
            self._async_group.close()


class _AdapterEventClientImpl(common.AdapterEventClient):

    def __init__(self, client, queue):
        self._queue = queue
        self._client = client

    async def receive(self):
        return await self._queue.get()

    def register(self, events):
        self._client.register(events)

    async def register_with_response(self, events):
        return await self._client.register_with_response(events)

    async def query(self, data):
        return await self._client.query(data)


def create_parser():
    """Create command line arguments parser

    Returns:
        argparse.ArgumentParser

    """
    parser = argparse.ArgumentParser(prog='hat-gui')
    parser.add_argument(
        '--conf', metavar='path', dest='conf',
        default=default_conf_path,
        action=util.EnvPathArgParseAction,
        help="configuration defined by hat://gui/main.yaml# "
             "(default $XDG_CONFIG_HOME/hat/gui.yaml)")
    parser.add_argument(
        '--additional-json-schemas-path', metavar='path',
        dest='additional_json_schemas_paths', nargs='*', default=[],
        action=util.EnvPathArgParseAction,
        help="additional json schemas paths")

    dev_args = parser.add_argument_group('development arguments')
    dev_args.add_argument(
        '--ui-path', metavar='path', dest='ui_path',
        default=default_ui_path,
        action=util.EnvPathArgParseAction,
        help="override web ui directory path")
    return parser


if __name__ == '__main__':
    sys.exit(main())
