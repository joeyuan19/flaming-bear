from django.db import models
from comment.models import Comment

# Create your models here.

class Post(models.Model):
	title       = models.CharField(max_length=100,verbose_name='blog post title')
	date        = models.DateField(auto_now_add=True,verbose_name='date post was created')
	rating_up   = models.IntegerField(blank=True,default=0,verbose_name='positive ratings on post')
	rating_down = models.IntegerField(blank=True,default=0,verbose_name='negative ratings on post')
	content     = models.TextField(verbose_name='blog post content')
	comments    = models.ManyToManyField(Comment,blank=True,verbose_name='comments on blog post')
	
	def __unicode__(self):
		return self.title
	
	def __string__(self):
		return self.__unicode__()
	
	def rating_to_string(self):
		if (self.rating_up+self.rating_down) <= 0:
			return "This post has not yet been rated."
		return str(int(100*float(self.rating_up)/(self.rating_up+self.rating_down) )//1) + "%"

	def get_number_comments(self):
		return len(self.comments.all())

