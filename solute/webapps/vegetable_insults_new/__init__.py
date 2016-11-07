# coding: utf-8
from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.add_renderer('.html', 'pyramid_jinja2.renderer_factory')
    config.include(".views.example")
    config.scan()

    # give ember the main toplevel root
    config.add_static_view('/', 'static')

    return config.make_wsgi_app()
