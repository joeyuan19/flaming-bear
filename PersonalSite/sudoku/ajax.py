from dajaxice.decorators import dajaxice_register
from django.utils import simplejson

import sudoku.sudoku3 as s

@dajaxice_register(name='sudoku.solve')
def solve(request,puzzle=None):
	time = None
	if not puzzle:
		solved = False
	else:
		time,puzzle = s.solve_puzzle(puzzle)
		solved = True
	return simplejson.dumps({'solved':solved,'puzzle':puzzle,'time':time})



