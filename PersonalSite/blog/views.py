from blog.models import Post
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.template.loader import render_to_string

def create_post(post):
	comments = post.comments.all()
	comments.reverse()
	comments = [
		{
			'username':comment.username,
			'content':comment.content,
			'date':comment.date,
			'rating':comment.get_rating(),
		} for comment in comments[:10]
	]
	context = {
		'title':post.title,
		'content':post.content,
		'date':post.date,
		'comments': comments,
		'rating': post.rating_to_string(),
	}
	return render_to_string(
		'blog/post_template.html',
		context)

def get_posts(request):
	posts = Post.objects.all()
	posts = [create_post(post) for post in posts[:10]]
	return render_to_response(
		'blog/blog_content.html',
		{'posts':posts},
		context_instance=RequestContext(request)
	)


