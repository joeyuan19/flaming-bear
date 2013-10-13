from django.db import models

# Create your models here.

class ViewCounter(models.Model):
	url   = models.URLField()
	views = models.IntegerField()
	
	
