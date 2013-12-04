# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext


def sudoku_view(request):
	return render_to_response(
		'sudoku/display.html',
		{},
		context_instance=RequestContext(request)
	)	

def test_view(request):
	return render_to_response(
		'sudoku/test.html',{},
		context_instance=RequestContext(request)
	)




