#!/usr/bin/env python

import puppenkiste.config.solute as _solute

runner = _solute.configure_runner(
    briefcase={
        'environments': [
            (('production',), {
                #'backends': _solute.default_deploy_backends,
                #'hosts': _solute.foreman_hosts('class = profile::x::production'),
            }),
            (('test',), {
                #'backends': _solute.default_deploy_backends,
                #'hosts': _solute.foreman_hosts('class = profile::x::test'),
            }),
        ],
        'commands': [
            #{'name': 'ls', 'description': 'List directories', 'cmdline': 'ls -la'},
        ],
    },
)
