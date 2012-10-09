#!/usr/bin/env python
"""
Blah

"""
import logging
import os
import requests
import sys
import transaction
import urlparse
from ZODB.FileStorage import FileStorage
from ZODB.DB import DB

from urlparse import urljoin as _j

logging.basicConfig(level=logging.DEBUG)
logger = logging

BASE_URL = 'https://api.github.com'
SALT_URL = _j(BASE_URL, 'repos/saltstack/salt/')
FORKS = _j(SALT_URL, 'forks')
WATCHERS = _j(SALT_URL, 'watchers')
USER_URL = _j(BASE_URL, 'users/')

SALT_USERS = os.path.join(os.path.dirname(__file__), 'saltusers_db.fs')

def get_pages(url, list_data, filter_func):
    logger.info("Fetching data from: {0}".format(url))
    response = requests.get(url)
    list_data += filter_func(response)

    if 'rel="next"' in response.headers.get('link', ''):
        next_url = [i.split('; ')
                for i in response.headers.get('link', '').split(', ')
                if 'rel="next"' in i]

        if next_url:
            get_pages(
                    next_url[0][0].strip('<>'),
                    list_data,
                    filter_func)

def get_contributors():
    contributors = []

    get_pages(FORKS,
            contributors,
            lambda x: [i['owner'].get('login')
                for i in x.json
                if 'owner' in i])
    logger.info("Added forks; contributor count is {0}".format(len(contributors)))

    get_pages(WATCHERS,
            contributors,
            lambda x: [i.get('login') for i in x.json])
    logger.info("Added watchers; contributor count is {0}".format(len(contributors)))

    return set(contributors)

def main():
storage = FileStorage(SALT_USERS)
db = DB(storage)
connection = db.open()
saltusers = connection.root()

    contributors = get_contributors()
    logger.info("Got {0} unique contributors".format(len(contributors)))

    for i in contributors:
        login = str(i)
        if login not in saltusers:
            user = requests.get(_j(USER_URL, login))
            saltusers[login] = user.json
            logger.info("Inserting {0}".format(login))

    transaction.commit()

if __name__ == '__main__':
    main()
