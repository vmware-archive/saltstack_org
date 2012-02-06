import os
import sys
import site

### Configure which settings file to look at for this environment
os.environ['DJANGO_SETTINGS_MODULE'] = 'saltstack_org.settings'

### Put virtualenv on the PYTHONPATH
site.addsitedir('/srv/http/saltstack.org/lib/python2.7/site-packages')

### Create the wsgi application
import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()
