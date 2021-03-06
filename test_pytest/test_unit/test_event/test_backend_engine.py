import pytest

import hat.event.server

from test_unit.test_event import common
import test_unit.test_event.backends.memory_backend


@pytest.fixture
def backend_engine_conf():
    return {'server_id': 0,
            'backend': {
                'module': 'test_unit.test_event.backends.memory_backend'}}


@pytest.fixture
def register_events():
    event_types = [['a'],
                   ['a'],
                   ['b'],
                   ['a', 'b'],
                   ['a', 'b'],
                   ['a', 'b', 'c'],
                   []]
    return [hat.event.common.RegisterEvent(event_type=et,
                                           source_timestamp=None,
                                           payload=None)
            for et in event_types]


@pytest.mark.asyncio
@pytest.fixture
async def backend_engine_backend(backend_engine_conf):
    with common.get_return_values(
            test_unit.test_event.backends.memory_backend.create) as backend:
        backend_engine = await hat.event.server.backend_engine.create(
            backend_engine_conf)
        backend = backend[0]

    yield backend_engine, backend

    await backend_engine.async_close()
    assert backend_engine.closed.done()
    await backend.closed


async def create_process_events_mock(reg_events, backend_engine):
    ret = []
    source = hat.event.server.common.Source(
        type=hat.event.server.common.SourceType.COMMUNICATION,
        id=0)

    last_event_id = await backend_engine.get_last_event_id()
    last_instance_id = last_event_id.instance
    for reg_event in reg_events:
        last_instance_id += 1
        ret.append(
            hat.event.server.common.ProcessEvent(
                event_id=hat.event.common.EventId(
                    server=last_event_id.server,
                    instance=last_instance_id),
                source=source,
                event_type=reg_event.event_type,
                source_timestamp=reg_event.source_timestamp,
                payload=reg_event.payload))
    return ret


@pytest.mark.asyncio
async def test_create_backend(backend_engine_backend, backend_engine_conf):
    backend_engine, backend = backend_engine_backend

    assert not backend_engine.closed.done()
    assert not backend.closed.done()

    last_event_id = await backend_engine.get_last_event_id()
    assert last_event_id.server == backend_engine_conf['server_id']


@pytest.mark.asyncio
async def test_register(backend_engine_backend, register_events):
    backend_engine, backend = backend_engine_backend

    process_events = await create_process_events_mock(
        register_events, backend_engine)
    events = await backend_engine.register(process_events)

    assert all(common.compare_proces_event_vs_event(e1, e2)
               for e1, e2 in zip(events, process_events))
    assert all(events[0].timestamp == e.timestamp for e in events)

    backend_events = backend._events
    assert all(isinstance(e, hat.event.server.common.BackendEvent)
               for e in backend_events)
    event_types_unique = set(tuple(e.event_type) for e in register_events)
    event_type_id_mappings = await backend.get_event_type_id_mappings()
    assert len(event_type_id_mappings) == len(event_types_unique)
    for be, e in zip(backend_events, events):
        assert event_type_id_mappings[be.event_type_id] == e.event_type
        assert common.compare_backend_event_vs_event(be, e)
    # lately registered events have greater timestamp
    events_previous = events
    for _ in range(3):
        process_events = await create_process_events_mock(
            register_events, backend_engine)
        events = await backend_engine.register(process_events)
        assert events[0].timestamp >= events_previous[0].timestamp
        events_previous = events


@pytest.mark.parametrize("query_type, event_types_expected", [
    ([['*']], [['a'], ['a', 'b'], ['a', 'b', 'c'], ['b'], []]),
    ([['?']], [['a'], ['b']]),
    ([['?', '*']], [['a'], ['b'], ['a', 'b'], ['a', 'b', 'c']]),
    ([['?', '?']], [['a', 'b']]),
    ([['?', '?', '*']], [['a', 'b'], ['a', 'b', 'c']]),
    ([['a', '*']], [['a'], ['a', 'b'], ['a', 'b', 'c']]),
    ([['b']], [['b']]),
    ([[]], [[]]),
    ([['a'], ['b'], []], [['a'], ['b'], []]),
    ([['?'], ['?', '?']], [['a'], ['b'], ['a', 'b']]),
    ([['*'], ['a']], [['a'], ['a', 'b'], ['a', 'b', 'c'], ['b'], []]),
    ([['c']], []),
    ([['a', 'b', 'c']], [['a', 'b', 'c']]),
    ([['a', 'b', 'c', 'd']], []),
    ])
@pytest.mark.asyncio
async def test_query(backend_engine_backend, register_events,
                     query_type, event_types_expected):
    backend_engine, backend = backend_engine_backend
    process_events = await create_process_events_mock(
        register_events, backend_engine)
    await backend_engine.register(process_events)
    event_type_id_mappings = await backend.get_event_type_id_mappings()

    query_result = await backend_engine.query(
        hat.event.common.QueryData(event_types=query_type))
    backend_query_data = await backend._query_data_queue.get()
    event_types_queried = [event_type_id_mappings[id]
                           for id in backend_query_data.event_type_ids]

    assert isinstance(backend_query_data,
                      hat.event.server.common.BackendQueryData)
    assert len(event_types_queried) == len(event_types_expected)
    assert all(et in event_types_expected for et in event_types_queried)
    assert all(e.event_type in event_types_expected for e in query_result)
    assert all(isinstance(e, hat.event.common.Event) for e in query_result)
