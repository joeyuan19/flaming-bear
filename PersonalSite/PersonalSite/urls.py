from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import RedirectView
from django.views.generic import TemplateView

from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
	url(r'^django_test/','PersonalSite.views.django_test',name='django_test'),
    
    url(r'^robots.txt\.txt$',TemplateView.as_view(template_name='robots.html')),
    
    url(r'^presentation/','PersonalSite.views.presentation',name='presentation'),
	url(r'^test$','PersonalSite.views.test',name='test'),
	# Admin
	url(r'^admin/', include(admin.site.urls)),

	# Ajax urls
	(dajaxice_config.dajaxice_url,include('dajaxice.urls')),

	# blog
	url(r'^blog/',include('blog.urls')),
	url(r'^project/',include('projects.urls')),
    
    # project short cuts
    (r'^xkcd-clock/$', RedirectView.as_view(url='/project/xkcd-clock/')),


    url(r'^$','PersonalSite.views.homepage', name='homepage'),
    
    url(r'','PersonalSite.views.homepage_redirect',name='homepage_redirect'),    
) + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)




urlpatterns += staticfiles_urlpatterns()

