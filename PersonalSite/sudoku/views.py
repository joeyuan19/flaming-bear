# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext
from dajaxice.decorators import dajaxice_register
from django.utils import simplejson

import sudoku.sudoku3 as s


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

@dajaxice_register(name='sudoku.solve')
def solve(request,puzzle=None):
	print puzzle
	time = None
	if not puzzle:
		solved = False
	else:
		time,puzzle = s.solve_puzzle(puzzle)
		solved = True
	return simplejson.dumps({'solved':solved,'puzzle':puzzle,'time':time})

@dajaxice_register(name='sudoku.test')
def solve(request):
	puzzle = [[(i+j)%2 for i in range(9)] for j in range(9)]
	return simplejson.dumps({'puzzle':puzzle})



