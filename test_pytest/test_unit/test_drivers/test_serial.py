import pytest
import subprocess
import atexit
import time
import asyncio
import sys

import hat.drivers.serial


pytestmark = pytest.mark.skipif(sys.platform == 'win32',
                                reason="can't simulate serial")


@pytest.fixture
def nullmodem(request, tmp_path):
    path1 = tmp_path / '1'
    path2 = tmp_path / '2'
    p = subprocess.Popen(
        ['socat',
         f'pty,link={path1},raw,echo=0',
         f'pty,link={path2},raw,echo=0'])
    while not path1.exists() or not path2.exists():
        time.sleep(0.001)

    def finalizer():
        p.terminate()

    atexit.register(finalizer)
    request.addfinalizer(finalizer)
    return path1, path2, p


@pytest.mark.asyncio
async def test_open(nullmodem):
    conf = {
        'port': str(str(nullmodem[0])),
        'rtscts': True,
        'dsrdtr': True}

    conn = await hat.drivers.serial.open(conf)
    assert not conn.closed.done()
    await conn.async_close()
    assert conn.closed.done()


@pytest.mark.asyncio
async def test_read_write(nullmodem):
    conf1 = {
        'port': str(nullmodem[0]),
        'rtscts': True,
        'dsrdtr': True}
    conf2 = {
        'port': str(nullmodem[1]),
        'rtscts': True,
        'dsrdtr': True}

    conn1 = await hat.drivers.serial.open(conf1)
    conn2 = await hat.drivers.serial.open(conf2)

    data = b'test1'
    await conn1.write(data)
    assert data == await conn2.read(len(data))

    data = b'test2'
    await conn2.write(data)
    assert data == await conn1.read(len(data))

    await asyncio.gather(conn1.async_close(), conn2.async_close())

    with pytest.raises(Exception):
        await conn2.read(1)


@pytest.mark.asyncio
async def test_close_while_reading(nullmodem):
    conf = {
        'port': str(nullmodem[0]),
        'rtscts': True,
        'dsrdtr': True}

    conn = await hat.drivers.serial.open(conf)

    read_future = asyncio.ensure_future(conn.read(1))

    await conn.async_close()

    with pytest.raises(Exception):
        read_future.result()


@pytest.mark.asyncio
async def test_close_nullmodem(nullmodem):
    conf = {
        'port': str(nullmodem[0]),
        'rtscts': True,
        'dsrdtr': True}

    conn = await hat.drivers.serial.open(conf)

    read_future = asyncio.ensure_future(conn.read(1))

    nullmodem[2].terminate()

    with pytest.raises(Exception):
        read_future.result()

    await conn.async_close()
