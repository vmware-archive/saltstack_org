"""Development settings for saltstack.org

This is expecting a file structure like virtualenvdir/{media,static,project}

"""
import saltstack_org
from saltstack_org.settings import *

import os

_proj = lambda *x: os.path.join(os.path.abspath(
    os.path.dirname(saltstack_org.__file__)), *x)

DEBUG = True
TEMPLATE_DEBUG = DEBUG

DATABASES['default']['NAME'] = _proj('development.sqlite3')

EMAIL_HOST = 'localhost'
EMAIL_PORT = 1025

MEDIA_ROOT = _proj(os.path.pardir, 'media')
STATIC_ROOT = _proj(os.path.pardir, 'static')

FIXTURE_DIRS = [
    _proj('fixtures'),
]

STATICFILES_DIRS = [
    _proj('static'),
]

TEMPLATE_DIRS = [
    _proj('templates'),
]

SENTRY_KEY = ''
SENTRY_REMOTE_URL = ''
SENTRY_TESTING = True
SENTRY_PUBLIC = True
