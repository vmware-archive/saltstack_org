from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin
from django.views.generic import RedirectView

from saltstack_org.saltutil import views

admin.autodiscover()

class OldDocs(RedirectView):
    def get_redirect_url(self, path):
        rtdurl = '{0}/{1}'.format(self.url, path.lstrip('/'))

        if rtdurl.endswith('/'):
            return '{0}index.html'.format(rtdurl)

        return rtdurl

urlpatterns = patterns('django.views.generic.simple',
    url(r'^documentation/$', 'redirect_to',
        {'url': 'http://docs.saltstack.org'}, name='documentation'),

    url(r'^ref/(?P<path>.*)$',
        OldDocs.as_view(url='http://docs.saltstack.org/en/latest/ref')),

    url(r'^topics/(?P<path>.*)$',
        OldDocs.as_view(url='http://docs.saltstack.org/en/latest/topics')),

    # Legacy URL from Sphinx homepage
    url(r'home', 'redirect_to', {'url': '/'}, name='home'),
)

urlpatterns += patterns('',
    url(r'^sentry/', include('sentry.web.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('',
    url(r'^(?P<slug>.+)/$', views.PageView.as_view(), name='page'),
    url(r'^$', views.PageView.as_view(), {'slug':'index'}, name='index'),
)
