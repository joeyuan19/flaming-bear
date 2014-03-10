from django.contrib import admin
from analytics.models import Visit, Visitor

class VisitAdmin(admin.ModelAdmin):
	list_display = ('url','date','get_visitor')

class VisitorAdmin(admin.ModelAdmin):
	list_display = ('ip','user_agent','visit_count','list_visits')

admin.site.register(Visit,VisitAdmin)
admin.site.register(Visitor,VisitorAdmin)



