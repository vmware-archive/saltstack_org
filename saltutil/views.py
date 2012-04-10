from django.views.generic.base import TemplateView
from django.template.response import TemplateResponse
from django.template.base import TemplateDoesNotExist
from django.http import Http404

class PageView(TemplateView):
    """
    Inspired by snippet #2698

    """
    template_name = ['pages/%s.html', 'pages/%s/index.html']

    def get_template_names(self, context):
        if 'slug' in context:
            return [i % context.get('slug') for i in self.template_name]
        raise ValueError("PageView requires the 'slug' kwarg to be passed.")

    def render_to_response(self, context, **response_kwargs):
        templates = self.get_template_names(context)
        response = self.response_class(
            request = self.request,
            template = templates,
            context = context,
            **response_kwargs)

        try:
            response.resolve_template(templates)
        except TemplateDoesNotExist:
            raise Http404('Page "%(slug)s" is not found' % context)

        return response

    def get_context_data(self, **kwargs):
        context = super(PageView, self).get_context_data(**kwargs)
        slug = kwargs['slug']
        context.update({'slug': slug, 'actives': slug.split('/')})
        return context
