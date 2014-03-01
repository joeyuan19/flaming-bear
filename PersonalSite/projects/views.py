# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext


def sudoku_view(request):
	return render_to_response(
		'sudoku/display.html',
        {'alt_title':'Sudoku'},
		context_instance=RequestContext(request)
	)	

def ascii_view(request):
    return render_to_response(
        'asciiart/display.html',
        {'alt_title':'PyAsciiArt'},
        context_instance=RequestContext(request)
    )

def test_view(request):
	return render_to_response(
		'sudoku/test.html',
        {},
		context_instance=RequestContext(request)
	)




