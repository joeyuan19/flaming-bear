from django.db import models
from django.utils import timezone

import datetime
"""
SESSION_TIMEOUT = datetime.timedelta(seconds=10)

class PageViewer(models.Model):
	view_history = models.ManyToManyField(Session)
	
	def get_number_visits(self):
		return view_history.count()

	def active(self):
		if self.get_number_visits() <= 0:
			return false
		else:
			session = view_history.all()[get_number_visits()-1]
			now = timezone.now()
			return session.get_last_time() > now - SESSION_TIMEOUT
			



class Session(models.Model):
	session_token = ''
	visit_trail = []

	def add(self, page):
		visit_trail.append(page)
	
	def get_duration(self):
		if len(visit_trail) > 0:
			return self.visit_trail[-1].date - self.visit_trail[0].date
		else:
			return False

	def page_change(self,page):
		if len(visit_trail) > 0:
			return self.visit_trail[-1] == page
		else:
			return False

class PageView(models.Model):
	date = models.DateTimeField(auto_now_add=True,default=timezone.now())
	url = models.CharField(max_length=100)
	IP = models.CharField(max_length=10)

class PageInfo(models.Model):
	viewers = models.ManyToManyField(PageViewer,blank=True)
	
	def check_visitor(self,IP):
		viewer_objs = self.viewers.filter(IP=IP)
		if len(view_objs) <= 0:
			return True
		viewer = viewer_objs[0]	# last view
		offset = timezone.now() - datetime.timedelta(seconds=30)
		return viewer.active()
			

	def get_number_page_views(self,days):
		view_objs = self.views.all()
		today = timezone.now()
		margin = datetime.timedelta(days=days)
		offset = today - margin
		qual = []
		for view in view_objs:
			if offset <= view.date:
				qual.append(view)
		return len(qual)

	def delete(self, *args, **kwargs):
		self.views.all().delete(*args, **kwargs)
		super(PageInfo,self).delete(*args,**kwargs)

	def get_total_page_views(self):
		return len(self.views.all())

	def __unicode__(self):
		return str(self.url)
	
	def __str__(self):
		return self.__unicode__()
"""

