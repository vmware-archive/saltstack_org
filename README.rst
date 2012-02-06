================================
Django project for saltstack.org
================================

Installation
============

1.  Start by creating and running a bootstrap script that will build and
    populate a virtualenv. This script will make a new virtualenv, clone the
    repository, and populate the virtualenv via pip::

        wget https://raw.github.com/saltstack/saltstack_org/master/mkbootstrap
        chmod +x ./mkbootstrap
        ./mkbootstrap -f bootstrap-saltstack_org
        ./bootstrap-saltstack_org path/to/virtualenv

        # Set the req'd environment settings
        source path/to/virtualenv/bin/activate
        export DJANGO_SETTINGS_MODULE=saltstack_org.settings.devel

        # Create the database
        django-admin.py syncdb
        django-admin.py collectstatic
