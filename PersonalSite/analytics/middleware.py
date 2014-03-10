from analytics.models import Visit, Visitor
import re


BLACK_LIST_URLS = ['admin']

# Helper Methods

def get_request_url(request):
	try:
		path = request.get_full_path()
	except:
		path = "/PATH_NOT_FOUND_404"
	return path

def get_client_IP(request):
	IP = request.META.get('HTTP_X_FORWARDED_FOR',request.META.get('REMOTE_ADDR', '127.0.0.1'))
	if IP:
		ip_regex = re.compile(r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}')
		try:
			IP = ip_regex.match(IP)
			if IP:
				IP = IP.group(0)
			else:
				IP = '-1.-1.-1.-1' # Dummy IP Address
		except:
			IP = '-1.-1.-1.-1' # Dummy IP Address
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
        visitor = Visitor.objects.filter(visitor_ip=IP)

        last_visit = visitor.visits.objects.filter(url=page_url)
        if len(last_visit) > 0:


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



