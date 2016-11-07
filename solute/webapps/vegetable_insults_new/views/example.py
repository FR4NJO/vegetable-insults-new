# coding: utf-8

from pyramid.view import view_config


@view_config(route_name='home', renderer='home.html')
def home(request):
    return {'project': 'test'}

def includeme(config):
    config.add_route('home', '/home')
