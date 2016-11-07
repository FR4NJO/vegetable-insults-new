#!/usr/bin/env python
# -*- coding: utf-8 -*-

import solute.packaging

packages = solute.packaging.find_packages()

scripts = solute.packaging.find_scripts('scripts/')

data_files = [

    ('share/solute/vegetable-insults-new/',
        [
        # manually managed files go here
        ]
    ),
    ('/etc/solute/cronjobs/', solute.packaging.find_cronjobs('cron/')),
]
data_files.extend(solute.packaging.include_webapp_profiles("vegetable_insults_new", ["production", "test"]))


solute.packaging.setup(
    name = solute.packaging.name_from_changelog(),
    version = solute.packaging.version_from_changelog(),
    description = solute.packaging.field_from_control('Description', ''),
    author = solute.packaging.maintainer_name_from_control(),
    author_email = solute.packaging.maintainer_email_from_control(),
    url = solute.packaging.field_from_control('Homepage', ''),

    install_requires = [
        'pyramid',
        'pyramid_jinja2',
        'pyramid_chameleon',
        'pyramid_debugtoolbar',
        'waitress',
    ],
    setup_requires = [
        'setuptools-git',

    ],
    tests_require = [
        'solute-python-solute',
        'fake_factory',
        'mock',
        'pytest',

    ],

    packages = packages.keys(),
    include_package_data=True,

    scripts = scripts,
    data_files = data_files,
)
