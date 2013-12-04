from dajaxice.decorators import dajaxice_register
from django.utils import simplejson
import sudoku.sudoku3 as s
import re

def smart_stringify(time):
	time = "%.8f" % time
	time = str(time)
	time = re.sub(r'([\d]{1})\g<1>*$', '', time)
	return time



@dajaxice_register(name='sudoku.solve')
def solve(request,puzzle=None):
	time = None
	if not puzzle:
		solved = False
	else:
		time,puzzle = s.solve_puzzle(puzzle)
		solved = True
	if time is not None:
		time = smart_stringify(time)
	return simplejson.dumps({'solved':solved,'puzzle':puzzle,'time':time})



