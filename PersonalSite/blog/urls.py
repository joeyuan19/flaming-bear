from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	url(r'','blog.views.get_posts', name='get_posts'),
)
