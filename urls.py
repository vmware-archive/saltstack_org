from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin

from saltstack_org.saltutil import views

admin.autodiscover()

urlpatterns = patterns('django.views.generic.simple',
    url(r'^documentation/$', 'redirect_to',
        {'url': 'http://docs.saltstack.org'}, name='documentation'),

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
