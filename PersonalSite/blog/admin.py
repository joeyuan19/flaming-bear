from django.contrib import admin
from blog.models import Post

class PostAdmin(admin.ModelAdmin):
	list_display = ('title','date','rating_to_string','rating_up','rating_down','content','get_number_comments')


admin.site.register(Post,PostAdmin)

