"""Development settings for saltstack.org

This is expecting a file structure like virtualenvdir/{media,static,project}

"""
import saltstack_org
from saltstack_org.settings import *

import os

_proj = lambda *x: os.path.join(os.path.abspath(
    os.path.dirname(saltstack_org.__file__)), *x)

DEBUG = True

DATABASES['default']['NAME'] = _proj('development.sqlite3')

MEDIA_ROOT = _proj(os.path.pardir, 'media')
STATIC_ROOT = _proj(os.path.pardir, 'static')

STATICFILES_DIRS = (
    _proj('static'),
)

TEMPLATE_DIRS = (
    _proj('templates'),
)

SENTRY_KEY = ''
SENTRY_REMOTE_URL = ''
SENTRY_TESTING = True
SENTRY_PUBLIC = True

INSTALLED_APPS += [
]
