from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	url(r'test/','projects.views.test_view',name='project_test'),
	url(r'sudoku','projects.views.sudoku_view',name='sudoku'),
	url(r'ascii','projects.views.ascii_view',name='ascii'),
    
)


