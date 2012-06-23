import os
import sys
import site

### Put virtualenv on the PYTHONPATH
site.addsitedir('/srv/http/saltstack/lib/python2.7/site-packages')

### Create the wsgi application
import django.core.handlers.wsgi

dj_application = django.core.handlers.wsgi.WSGIHandler()

def salt_application(environ, start_response):
    os.environ['DJANGO_SETTINGS_MODULE'] = 'saltstack_com.settings'
    return dj_application(environ, start_response)

application = salt_application
