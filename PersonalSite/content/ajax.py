from django.utils import simplejson
from django.template import RequestContext
from django.template.loader import render_to_string
from dajaxice.decorators import dajaxice_register
import os

#@dajaxice_register(method='GET', name='content.load')
#@dajaxice_register(method='POST',name='content.load')
@dajaxice_register(name='content.load')
def load(request,section_id):
	if len(section_id) <= 0:
		return
	html = render_to_string(
		'content/'+section_id+'.html',
		context_instance=RequestContext(request)
	)
	json = {
		'html':html,
		'destination_id':section_id
	}
	return simplejson.dumps(json)

@dajaxice_register(name='content.thisFunctionWillEmailMe')
def thisFunctionWillEmailMe(request):
	try:
		f = open(os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir)) +'/extras/sneaky.txt','r')
		json = {'cargo':f.readline().replace('\n','')[::-1]}
		f.close()
	except:
		json = {'cargo':''}
	return simplejson.dumps(json)


