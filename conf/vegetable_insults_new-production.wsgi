from pyramid.paster import get_app, setup_logging
conf_path = '/etc/solute/webapps/vegetable_insults_new.production.conf'
setup_logging(conf_path)
application = get_app(conf_path, 'main')
