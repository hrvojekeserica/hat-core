from pathlib import Path
import datetime
import platform
import shutil
import sys

import packaging.version

from hat.doit import common
from hat.doit.hat_core.duktape import lib_path as duktape_lib_path
from hat.doit.hat_core.pymod import sqlite3_mod_path


__all__ = ['task_pyhat_util',
           'task_pyhat_peg',
           'task_pyhat_sbs',
           'task_pyhat_chatter',
           'task_pyhat_juggler',
           'task_pyhat_duktape',
           'task_pyhat_sqlite3',
           'task_pyhat_drivers',
           'task_pyhat_orchestrator',
           'task_pyhat_monitor',
           'task_pyhat_event',
           'task_pyhat_gateway',
           'task_pyhat_gui',
           'task_pyhat_translator']


build_dir = Path('build/pyhat')
src_json_dir = Path('schemas_json')
src_sbs_dir = Path('schemas_sbs')
src_py_dir = Path('src_py')


def task_pyhat_clean():
    """PyHat - clean"""
    return {'actions': [(common.rm_rf, [build_dir])]}


def task_pyhat_util():
    """PyHat - build hat-util"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-util')
        json_schema_repo = src_py_dir / 'hat/util/json_schema_repo.json'
        for i in (src_py_dir / 'hat/util').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))

    return _get_task_build(name='hat-util',
                           description='Hat utility modules',
                           dependencies=['pyyaml',
                                         'jsonschema',
                                         'jsonpatch'],
                           mappings=mappings)


def task_pyhat_peg():
    """PyHat - build hat-peg"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-peg')
        src_py = src_py_dir / 'hat/peg.py'
        yield src_py, dst_dir / src_py.relative_to(src_py_dir)

    return _get_task_build(name='hat-peg',
                           description='Hat PEG parser',
                           dependencies=['hat-util'],
                           mappings=mappings)


def task_pyhat_sbs():
    """PyHat - build hat-sbs"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-sbs')
        for i in (src_py_dir / 'hat/sbs').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)

    return _get_task_build(name='hat-sbs',
                           description='Hat simple binary serializer',
                           dependencies=['hat-util',
                                         'hat-peg'],
                           mappings=mappings)


def task_pyhat_chatter():
    """PyHat - build hat-chatter"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-chatter')
        src_py = src_py_dir / 'hat/chatter.py'
        sbs_repo = src_py_dir / 'hat/chatter_sbs_repo.json'
        yield src_py, dst_dir / src_py.relative_to(src_py_dir)
        yield sbs_repo, dst_dir / sbs_repo.relative_to(src_py_dir)

    return _get_task_build(name='hat-chatter',
                           description='Hat Chatter protocol',
                           dependencies=['hat-util',
                                         'hat-sbs'],
                           mappings=mappings)


def task_pyhat_juggler():
    """PyHat - build hat-juggler"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-juggler')
        src_py = src_py_dir / 'hat/juggler.py'
        yield src_py, dst_dir / src_py.relative_to(src_py_dir)

    return _get_task_build(name='hat-juggler',
                           description='Hat Juggler protocol',
                           dependencies=['aiohttp',
                                         'hat-util'],
                           mappings=mappings)


def task_pyhat_duktape():
    """PyHat - build hat-duktape"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-duktape')
        src_py = src_py_dir / 'hat/duktape.py'
        dst_py = dst_dir / src_py.relative_to(src_py_dir)
        yield src_py, dst_py
        yield duktape_lib_path, dst_py.parent / duktape_lib_path.name

    return _get_task_build(name='hat-duktape',
                           description='Hat Python Duktape JS wrapper',
                           dependencies=[],
                           mappings=mappings,
                           platform_specific=True,
                           task_dep=['duktape'])


def task_pyhat_sqlite3():
    """PyHat - build hat-sqlite3"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-sqlite3')

        src_py = src_py_dir / 'hat/sqlite3.py'
        dst_py = dst_dir / src_py.relative_to(src_py_dir)
        yield src_py, dst_py

        dst_lib = dst_dir / sqlite3_mod_path.relative_to(src_py_dir)
        yield sqlite3_mod_path, dst_lib

    return _get_task_build(name='hat-sqlite3',
                           description='Hat Sqlite3 build',
                           dependencies=[],
                           mappings=mappings,
                           platform_specific=True,
                           task_dep=['pymod_sqlite3'])


def task_pyhat_drivers():
    """PyHat - build hat-drivers"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-drivers')
        json_schema_repo = src_py_dir / 'hat/drivers/json_schema_repo.json'
        for i in (src_py_dir / 'hat/drivers').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))

    return _get_task_build(name='hat-drivers',
                           description='Hat communication drivers',
                           dependencies=['pyserial',
                                         'hat-util'],
                           mappings=mappings)


def task_pyhat_orchestrator():
    """PyHat - build hat-orchestrator"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-orchestrator')
        json_schema_repo = (src_py_dir /
                            'hat/orchestrator/json_schema_repo.json')
        jshat_build = Path('build/jshat/app/orchestrator')
        for i in (src_py_dir / 'hat/orchestrator').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))
        for i in jshat_build.rglob('*'):
            if i.is_dir():
                continue
            yield i, (dst_dir / 'hat/orchestrator/ui'
                              / i.relative_to(jshat_build))

    return _get_task_build(
        name='hat-orchestrator',
        description='Hat Orchestrator',
        dependencies=['appdirs',
                      'hat-util',
                      'hat-juggler'],
        mappings=mappings,
        console_scripts=['hat-orchestrator = hat.orchestartor.main:main'],
        task_dep=['jshat_app'])


def task_pyhat_monitor():
    """PyHat - build hat-monitor"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-monitor')
        json_schema_repo = src_py_dir / 'hat/monitor/json_schema_repo.json'
        sbs_repo = src_py_dir / 'hat/monitor/sbs_repo.json'
        jshat_build = Path('build/jshat/app/monitor')
        for i in (src_py_dir / 'hat/monitor').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))
        yield sbs_repo, dst_dir / sbs_repo.relative_to(src_py_dir)
        for i in jshat_build.rglob('*'):
            if i.is_dir():
                continue
            yield i, (dst_dir / 'hat/monitor/server/ui'
                              / i.relative_to(jshat_build))

    return _get_task_build(
        name='hat-monitor',
        description='Hat Monitor Server and client',
        dependencies=['appdirs',
                      'hat-util',
                      'hat-sbs',
                      'hat-chatter',
                      'hat-juggler'],
        mappings=mappings,
        console_scripts=['hat-monitor = hat.monitor.server.main:main'],
        task_dep=['jshat_app'])


def task_pyhat_event():
    """PyHat - build hat-event"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-event')
        json_schema_repo = src_py_dir / 'hat/event/json_schema_repo.json'
        sbs_repo = src_py_dir / 'hat/event/sbs_repo.json'
        for i in (src_py_dir / 'hat/event').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))
        yield sbs_repo, dst_dir / sbs_repo.relative_to(src_py_dir)

    return _get_task_build(
        name='hat-event',
        description='Hat Event Server and client',
        dependencies=['appdirs',
                      'hat-util',
                      'hat-sbs',
                      'hat-chatter',
                      'hat-sqlite3',
                      'hat-monitor'],
        mappings=mappings,
        console_scripts=['hat-event = hat.event.server.main:main'])


def task_pyhat_gateway():
    """PyHat - build hat-gateway"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-gateway')
        json_schema_repo = src_py_dir / 'hat/gateway/json_schema_repo.json'
        for i in (src_py_dir / 'hat/gateway').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))

    return _get_task_build(
        name='hat-gateway',
        description='Hat remote communication device gateway',
        dependencies=['appdirs',
                      'hat-util',
                      'hat-sbs',
                      'hat-chatter',
                      'hat-monitor',
                      'hat-event'],
        mappings=mappings,
        console_scripts=['hat-gateway = hat.gateway.main:main'])


def task_pyhat_gui():
    """PyHat - build hat-gui"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-gui')
        json_schema_repo = src_py_dir / 'hat/gui/json_schema_repo.json'
        jshat_app_build = Path('build/jshat/app/gui')
        jshat_view_build = Path('build/jshat/view')
        for i in (src_py_dir / 'hat/gui').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)
        yield json_schema_repo, (dst_dir /
                                 json_schema_repo.relative_to(src_py_dir))
        for i in jshat_app_build.rglob('*'):
            if i.is_dir():
                continue
            yield i, (dst_dir / 'hat/gui/ui'
                              / i.relative_to(jshat_app_build))
        for i in jshat_view_build.rglob('*'):
            if i.is_dir():
                continue
            yield i, (dst_dir / 'hat/gui/views'
                              / i.relative_to(jshat_view_build))

    return _get_task_build(
        name='hat-gui',
        description='Hat GUI server',
        dependencies=['appdirs',
                      'hat-util',
                      'hat-sbs',
                      'hat-chatter',
                      'hat-monitor',
                      'hat-event'
                      'hat-juggler'],
        mappings=mappings,
        console_scripts=['hat-gui = hat.gui.main:main'],
        task_dep=['jshat_app',
                  'jshat_view'])


def task_pyhat_translator():
    """PyHat - build hat-translator"""
    def mappings():
        dst_dir = _get_build_dst_dir('hat-translator')
        for i in (src_py_dir / 'hat/translator').rglob('*.py'):
            yield i, dst_dir / i.relative_to(src_py_dir)

    return _get_task_build(
        name='hat-translator',
        description='Hat configuration transformation interface',
        dependencies=['hat-util'],
        mappings=mappings,
        console_scripts=['hat-translator = hat.translator.main:main'])


def _get_task_build(name, description, dependencies, mappings, *,
                    console_scripts=[], gui_scripts=[],
                    platform_specific=False, task_dep=[]):
    dst_dir = _get_build_dst_dir(name)
    setup_path = dst_dir / 'setup.py'
    manifest_path = dst_dir / 'MANIFEST.in'
    src_paths = list(src_path for src_path, _ in mappings())
    dst_paths = [setup_path] + list(dst_path for _, dst_path in mappings())
    return {'actions': [(common.mkdir_p, [dst_dir]),
                        (_copy_files, [mappings]),
                        (_create_manifest, [manifest_path, mappings]),
                        (_create_setup_py, [setup_path, name, description,
                                            dependencies, console_scripts,
                                            gui_scripts, platform_specific])],
            'file_dep': src_paths,
            'targets': dst_paths,
            'task_dep': task_dep}


def _get_build_dst_dir(name):
    return build_dir / name


def _copy_files(mappings):
    for src_path, dst_path in mappings():
        if not dst_path.parent.exists():
            dst_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(str(src_path), str(dst_path))


def _create_setup_py(path, name, description, dependencies, console_scripts,
                     gui_scripts, platform_specific):
    plat_name = _get_plat_name() if platform_specific else 'any'
    version = _get_version()
    readme = _get_readme()
    with open(path, 'w', encoding='utf-8') as f:
        f.write(f"from setuptools import setup\n\n\n"
                f"readme = r\"\"\"\n{readme}\n\"\"\"\n\n"
                f"setup(name={repr(name)},\n"
                f"      version={repr(version)},\n"
                f"      description={repr(description)},\n"
                f"      long_description=readme,\n"
                f"      long_description_content_type='text/x-rst',\n"
                f"      url='https://github.com/hat-open/hat-core',\n"
                f"      packages=['hat'],\n"
                f"      include_package_data=True,\n"
                f"      install_requires={repr(dependencies)},\n"
                f"      python_requires='>=3.8',\n"
                f"      license='MIT',\n"
                f"      zip_safe=False,\n"
                f"      classifiers=[\n"
                f"          'Programming Language :: Python :: 3',\n"
                f"          'License :: OSI Approved :: MIT License',\n"
                f"      ],\n"
                f"      options={{\n"
                f"          'bdist_wheel': {{\n"
                f"              'python_tag': 'cp38',\n"
                f"              'py_limited_api': 'cp38',\n"
                f"              'plat_name': '{plat_name}'\n"
                f"          }}\n"
                f"      }},\n"
                f"      entry_points={{\n"
                f"          'console_scripts': {repr(console_scripts)},\n"
                f"          'gui_scripts': {repr(gui_scripts)}\n"
                f"      }})\n")


def _create_manifest(path, mappings):
    with open(path, 'w', encoding='utf-8') as f:
        for _, i in mappings():
            f.write(f"include {i.relative_to(path.parent)}\n")


def _get_plat_name():
    arch, _ = platform.architecture()
    if sys.platform == 'win32' and arch == '32bit':
        return 'win32'
    if sys.platform == 'win32' and arch == '64bit':
        return 'win_amd64'
    if sys.platform == 'linux' and arch == '64bit':
        return 'manylinux1_x86_64'
    if sys.platform == 'darwin' and arch == '64bit':
        return 'macosx_10_13_x86_64'
    raise NotImplementedError()


def _get_version():
    with open('VERSION', encoding='utf-8') as f:
        version_str = f.read().strip()
    if version_str.endswith('dev'):
        version_str += datetime.datetime.now().strftime("%Y%m%d")
    version = packaging.version.Version(version_str)
    return version.public


def _get_readme():
    with open('README.rst', encoding='utf-8') as f:
        return f.read().strip()
