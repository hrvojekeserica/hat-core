from hat.util import aio
import hat.gui.common


json_schema_id = 'mock_adapter'
event_type_prefix = ['hat', 'gui', 'mock']


async def create(conf, client):
    adapter = MockAdapter()
    adapter._async_group = aio.Group()
    adapter._conf = conf
    adapter._client = client
    adapter._sessions = []
    return adapter


class MockAdapter(hat.gui.common.Adapter):

    @property
    def closed(self):
        return self._async_group.closed

    async def async_close(self):
        await self._async_group.async_close()

    @property
    def sessions(self):
        return self._sessions

    @property
    def conf(self):
        return self._conf

    @property
    def client(self):
        return self._client

    async def create_session(self, client):
        session = MockSession(client)
        self._sessions.append(session)
        return session


class MockSession(hat.gui.common.AdapterSession):
    def __init__(self, client):
        self._session_client = client
        self._async_group = aio.Group()

    @property
    def closed(self):
        return self._async_group.closed

    async def async_close(self):
        await self._async_group.async_close()

    @property
    def session_client(self):
        return self._session_client
