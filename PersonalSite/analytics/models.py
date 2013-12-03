from django.db import models

# Create your models here.

class Visit(models.Model):
	IP = models.CharField(max_length=100)
	url = models.CharField(max_length=100)
	count = models.IntegerField()


