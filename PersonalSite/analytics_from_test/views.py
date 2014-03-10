from django.shortcuts import render_to_response
from django.template import RequestContext
from analytics.models import PageInfo

def get_request_url(request):
	try:
		path = request.get_full_path()
	except:
		path = "/PATH_NOT_FOUND_404"
	try:
		return request.META['REMOTE_ADDR'] + path
	except:
		pass
	try:
		return request.META['HTTP_X_FORWARDED_FOR'] + path
	except:
		pass
	try:
		return request.META['HTTP_X_FORWARDED_HOST'] + path
	except:
		pass
	try:
		return request.META['HTTP_X_FORWARDED_SERVER'] + path
	except:
		pass
	return None


def viewcount_view(request):
	url = get_request_url(request) 
	page = PageInfo.objects.filter(url=url)
	if page:
		page = page[0]
		count = page.get_number_page_views(30)
	else:
		page = PageInfo()
		page.url = url
		page.save()
		count = page.get_number_page_views(30)
	return render_to_response(
		'viewcount_test.html',
		{'count':count},
		context_instance=RequestContext(request)
	)


