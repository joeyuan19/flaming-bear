from django.utils import simplejson
from django.template.loader import render_to_string
from django.template import RequestContext
from dajaxice.decorators import dajaxice_register


@dajaxice_register(method='GET')
@dajaxice_register(method='POST', name='other_post')
def hello(request):    
	return simplejson.dumps({'message': 'hello'})


@dajaxice_register(method='GET')
@dajaxice_register(method='POST', name="more.complex.bye")
def bye(request):
    raise Exception("PUMMMM")
    return simplejson.dumps({'message': 'bye'})


@dajaxice_register
def lol(request):
    return simplejson.dumps({'message': 'lol'})


@dajaxice_register(method='GET',name='get_section')
def get_section(request, section_id):
	if len(section_id) <= 0:
		return
	html = render_to_string('content/'+section_id+'.html',context_instance=RequestContext(request))
	json = {'html':html}
	return simplejson.dumps(json)




