from django.shortcuts import render
from dajaxice.core import dajaxice_functions




def homepage(request):
	return render(request,'index.html')

def test(request):
	return render(request,'test2.html')

def presentation(request):
	return render(request,'presentation.html')

def homepage_redirect(request):
    return render(request,'error.html')


from django.template import RequestContext
from django.shortcuts import render_to_response
from content.models import ResumeCategory

def django_test(request):
    categories = ResumeCategory.objects.all()
    debug = str(len(categories))
    canary = "canary"
    return render_to_response(
        'content/resume_django.html',
        {
            'debug':debug,
            'canary':canary,
            'categories':categories,
        },
        context_instance=RequestContext(request)
    )


