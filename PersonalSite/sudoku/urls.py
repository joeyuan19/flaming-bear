from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	url(r'test/','sudoku.views.test_view',name='test'),
	url(r'','sudoku.views.sudoku_view',name='sudoku'),
)


