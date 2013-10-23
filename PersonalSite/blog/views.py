from blog.models import Post
from django.template.loader import render_to_string

def create_post(post):
	return render_to_string('blog/post_template.html',context)

def get_posts(request):
	posts = Post.objects.all()
	


