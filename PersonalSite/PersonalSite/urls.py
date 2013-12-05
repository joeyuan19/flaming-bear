from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

from django.contrib import admin
admin.autodiscover()



urlpatterns = patterns('',
	(r'^google15592f70a37e3c4a\.html$', lambda r: HttpResponse("google-site-verification: google15592f70a37e3c4a.html", mimetype="text/plain")),
	
	url(r'^test$','PersonalSite.views.test',name='test'),
	
	# Admin
	url(r'^admin/', include(admin.site.urls)),
	
	# Ajax urls
	(dajaxice_config.dajaxice_url,include('dajaxice.urls')),

	# blog
	url(r'^blog/',include('blog.urls')),

	# Sudoku
	url(r'^sudoku/',include('sudoku.urls')),
	
	url(r'^$','PersonalSite.views.homepage', name='homepage'),

) + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()

