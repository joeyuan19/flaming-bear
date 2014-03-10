from analytics.models import PageView, PageInfo
import re


BLACK_LIST_URLS = ['admin']

# Helper Methods

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

def get_client_IP(request):
	IP = request.META.get('HTTP_X_FORWARDED_FOR',request.META.get('REMOTE_ADDR', '127.0.0.1'))
	if IP:
		ip_regex = re.compile('\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}')
		try:
			IP = ip_regex.match(IP)	
			if IP:
				IP = IP.group(0)
			else:
				IP = '0.0.0.0' # Dummy IP Address
		except:
			IP = '0.0.0.0' #Dummy IP Address
	return IP

# Views

class RegisterPageView(object):
	def process_request(self, request):
		page_url = get_request_url(request)
		
		# Do not makes records for unwanted site areas 
		for url in BLACK_LIST_URLS:
			if url in page_url:
				return
		
		IP = get_client_IP(request)
		page = PageInfo.objects.filter(url=page_url)	
		if len(page) <= 0:
			page = PageInfo()
			page.url = page_url
			page.save()
		else:
			page = page[0]

		if page.check_visitor(IP):
			viewer = PageViewer.objects.all()
			viewer.get()
			visit = PageView()
			visit.IP = IP
			visit.page = page
			visit.save()
			page.views.add(visit)
			page.save()



