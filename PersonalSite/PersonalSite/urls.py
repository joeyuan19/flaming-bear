from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
	url(r'^$','PersonalSite.views.homepage', name='homepage'),
	
	# Admin
	url(r'^admin/', include(admin.site.urls)),
	
	# Ajax urls
	(dajaxice_config.dajaxice_url,include('dajaxice.urls')),

) + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()

