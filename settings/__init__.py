import ConfigParser
import os

secret = ConfigParser.ConfigParser()
secret.optionxform = lambda x: x.upper()
secret.read([
    os.path.join(os.path.dirname(__file__), 'secrets.conf'),
    '/srv/http/saltstack/secrets.conf'])

DEBUG = False
TEMPLATE_DEBUG = DEBUG
INTERNAL_IPS = ('127.0.0.1',)

ADMINS = (
        ('Thomas S. Hatch', 'thatch@saltstack.com'),
        ('Seth House', 'seth@eseth.com'))
MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': '/srv/http/saltstack/database/database.sqlite',
    }
}

SITE_ID = 1
SECRET_KEY = secret.get('SALT', 'SECRET_KEY')

ROOT_URLCONF = 'saltstack_org.urls'

TIME_ZONE = 'America/Denver'
LANGUAGE_CODE = 'en-us'
USE_I18N = True
USE_L10N = True

ADMIN_FOR = ('saltstack_org.settings',)
LOGIN_REDIRECT_URL = '/'

RESTRUCTUREDTEXT_FILTER_SETTINGS = {
    'initial_header_level': 3,
}

SENTRY_REMOTE_URL = 'http://localhost/sentry/store/'
SENTRY_KEY = secret.get('SALT', 'SENTRY_KEY')

FIXTURE_DIRS = (
    '/srv/http/saltstack/saltstack_org/fixtures',
)

MEDIA_ROOT = '/srv/http/saltstack/media'
MEDIA_URL = '/media/'
STATIC_ROOT = '/srv/http/saltstack/static'
STATIC_URL = '/static/'
ADMIN_MEDIA_PREFIX = '/static/admin/'

STATICFILES_DIRS = [
    '/srv/http/saltstack/saltstack_org/static',
]

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

TEMPLATE_DIRS = [
    '/srv/http/saltstack/saltstack_org/templates',
]

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

TEMPLATE_CONTEXT_PROCESSORS = [
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
]

MIDDLEWARE_CLASSES = [
    'sentry.client.middleware.SentryResponseErrorIdMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.admindocs',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.flatpages',
    'django.contrib.markup',
    'django.contrib.messages',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.staticfiles',
    'sentry',
    'sentry.client',
    'saltstack_org.saltutil',
]

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'saltsentry': {
            'level': 'DEBUG',
            'class': 'sentry.client.handlers.SentryHandler',
        },
        # 'mail_admins': {
        #     'level': 'ERROR',
        #     'class': 'django.utils.log.AdminEmailHandler'
        # },
        # 'file':{
        #     'level': 'DEBUG',
        #     'class': 'logging.FileHandler',
        #     'filename': '/tmp/django.log',
        # },
    },
    'loggers': {
        # 'django.request': {
        #     'handlers': ['mail_admins', 'file'],
        #     'level': 'ERROR',
        #     'propagate': True,
        # },
        'saltstack.sentry': {
            'handlers': ['saltsentry'],
            'level': 'DEBUG',
        },
    }
}
