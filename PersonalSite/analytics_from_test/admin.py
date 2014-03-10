from django.contrib import admin
from analytics.models import PageInfo, PageView

class PageInfoAdmin(admin.ModelAdmin):
	list_display = ('url','get_total_page_views')

class PageViewAdmin(admin.ModelAdmin):
	list_display = ('IP','date','page')

admin.site.register(PageInfo,PageInfoAdmin)
admin.site.register(PageView,PageViewAdmin)



