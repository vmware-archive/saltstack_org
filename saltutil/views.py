from django.views.generic.base import View
from django.template.response import TemplateResponse
from django.template.base import TemplateDoesNotExist
from django.http import Http404

class PageView(View):
    """
    Snippet #2698

    """
    def get(self, request, *args, **kwargs):
        slug = kwargs['slug']
        templates = ('pages/%s.html' % slug, 'pages/%s/index.html' % slug)
        response = TemplateResponse(request, templates,
                {'actives': slug.split('/')})

        # test if the template exists before the common middleware
        # try to automatically render the response
        try:
            response.resolve_template(templates)
        except TemplateDoesNotExist:
            raise Http404('Page "%s" is not found' % slug)

        return response
