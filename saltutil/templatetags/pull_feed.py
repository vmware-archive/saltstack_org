import datetime
import os
import time
import urllib

import feedparser

from django import template

CACHE_FOLDER = '/tmp/pull_feed'
register = template.Library()

@register.inclusion_tag('pull_feed.html')
def pull_feed(feed_url, posts_to_show=5, cache_expires=30):
    """Snippet 384

    """
    CACHE_FILE = ''.join([CACHE_FOLDER, template.defaultfilters.slugify(feed_url), '.cache'])
    try:
        cache_age = os.stat(CACHE_FILE)[8]
    except: #if file doesn't exist, make sure it gets created
        cache_age = 0
    #is cache expired? default 30 minutes (30*60)
    if (cache_age + cache_expires*60 < time.time()):
        try: #refresh cache
            urllib.urlretrieve(feed_url,CACHE_FILE)
        except IOError: #if downloading fails, proceed using cached file
            pass
    #load feed from cache
    feed = feedparser.parse(open(CACHE_FILE))
    posts = []
    for i in range(posts_to_show):
        pub_date = feed['entries'][i].updated_parsed
        published = datetime.date(pub_date[0], pub_date[1], pub_date[2] )
        posts.append({
            'title': feed['entries'][i].title,
            'summary': feed['entries'][i].summary,
            'link': feed['entries'][i].link,
            'date': published,
        })
    return {'posts': posts}
