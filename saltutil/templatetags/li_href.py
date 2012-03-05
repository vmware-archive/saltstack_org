from django import template
from django.core.urlresolvers import reverse, resolve, Resolver404

register = template.Library()

@register.inclusion_tag('li_href.html', takes_context=True)
def li_href(context, slug, text, icon=''):
    page = slug.split('/')[-1]

    return {
        'text': text,
        'actives': context.get('actives'),
        'slug': slug,
        'page': page,
        'icon': icon}
