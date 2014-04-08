from django.contrib import admin
from content.models import Resume, ResumeCategory

class ResumeAdmin(admin.ModelAdmin):
	list_display = ('title',)

class ResumeCategoryAdmin(admin.ModelAdmin):
	list_display = ('title','list_entries')

admin.site.register(Resume,ResumeAdmin)
admin.site.register(ResumeCategory,ResumeCategoryAdmin)



