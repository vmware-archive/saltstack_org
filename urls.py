from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'saltstack_org.views.home', name='home'),
    # url(r'^saltstack_org/', include('saltstack_org.foo.urls')),

    # Legacy URL from Sphinx homepage
    url(r'home', 'django.views.generic.simple.redirect_to', {
        'url': '/'}, name='home'),

    url(r'^sentry/', include('sentry.web.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
