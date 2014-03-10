from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	url(r'','analytics.views.viewcount_view', name='get_views'),
)

