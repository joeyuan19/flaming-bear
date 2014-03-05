from django.shortcuts import render
from dajaxice.core import dajaxice_functions


def homepage(request):
	return render(request,'index.html')

def test(request):
	return render(request,'test2.html')

def presentation(request):
	return render(request,'presentation.html')

def homepage_redirect(request):
    return render(request,'error.html')


