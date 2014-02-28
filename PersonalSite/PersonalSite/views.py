from django.shortcuts import render
from dajaxice.core import dajaxice_functions


def homepage(request):
	return render(request,'index.html')

def test(request):
	return render(request,'test2.html')

def presentation(request):
	return render(request,'presentation.html')

def xkcd_clock(request):
    return render(request,'xkcd-clock.html'


