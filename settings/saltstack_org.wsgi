import os
import sys
import site

### Put virtualenv on the PYTHONPATH
site.addsitedir('/srv/http/saltstack/lib/python2.7/site-packages')

### Create the wsgi application
import django.core.handlers.wsgi

dj_application = django.core.handlers.wsgi.WSGIHandler()

def salt_application(environ, start_response):
    if environ['HTTP_HOST'].endswith('saltstack.org'):
        settings = 'saltstack_org.settings'
    elif environ['HTTP_HOST'].endswith('saltstack.com'):
        settings = 'saltstack_com.settings'
    else:
        status = '400 Bad Request'
        response_headers = [('Content-type','text/html')]
        start_response(status, response_headers)
        return [status]

    os.environ['DJANGO_SETTINGS_MODULE'] = settings
    return dj_application(environ, start_response)

application = salt_application
