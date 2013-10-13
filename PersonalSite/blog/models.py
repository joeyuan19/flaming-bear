from django.db import models
from comment.models import Comment

# Create your models here.

class blog_post(models.Model):
	title       = models.CharField(max_length=100,verbose_name='blog post title')
	date        = models.DateField(auto_now_add=True,verbose_name='date post was created')
	rating_up   = models.IntegerField(verbose_name='positive ratings on post')
	rating_down = models.IntegerField(verbose_name='negative ratings on post')
	content     = models.TextField(verbose_name='blog post content')
	comments    = models.ManyToManyField(Comment,verbose_name='comments on blog post')


