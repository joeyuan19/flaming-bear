from django.db import models

# Create your models here.

class Comment(models.Model):
	username    = models.CharField(max_length=30,verbose_name='username chosen by commenter')
	content     = models.TextField(verbose_name='comment content')
	rating_up   = models.IntegerField(verbose_name='up rating')
	rating_down = models.IntegerField(verbose_name='down rating')
	date        = models.DateField(auto_now_add=True,verbose_name='date comment was made')

	def __unicode__(self):
		return username + " " + date
	
	def __string__(self):
		return self.__unicode__()

	def rating_to_string(self):
		return int(100*float(rating_up)/(rating_up+rating_down) )//1 + "%"


