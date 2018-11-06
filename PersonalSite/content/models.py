from django.db import models
from django.utils import timezone

# Create your models here.

class Project(models.Model):
    title   = models.CharField(max_length=128,blank=True,null=True,default="")
    body    = models.TextField(blank=True,null=True,default="")
    preview = models.ImageField(upload_to="img/project_previews/",blank=True,null=True,default=None)
    rel_date = models.CharField(max_length=128,blank=True,null=True,default="")
    url = models.URLField(max_length=128,blank=True,null=True,default="")
    org_key = models.IntegerField(blank=True,null=True,default=0)

    def __repr__(self):
        return "<Project title:"+self.title+">"

    def __unicode__(self):
        return self.__repr__()

    def __str__(self):
        return self.__repr__()


class ProjectCategory(models.Model):
    title = models.CharField(max_length=64)
    entries = models.ManyToManyField(Project,blank=True)
    org_key = models.IntegerField(blank=True,null=True,default=0)

    
    def __repr__(self):
        return "<Project Category title:"+self.title+">"

    def __unicode__(self):
        return self.__repr__()

    def __str__(self):
        return self.__repr__()


class Contact(models.Model):
    pass

class Resume(models.Model):
    title = models.CharField(max_length=128,blank=True,null=True,default="")
    location = models.CharField(max_length=128,blank=True,null=True,default="")
    description = models.TextField(blank=True,null=True,default="")
    relevent_dates = models.CharField(max_length=128,blank=True,null=True,default="")
    sort_date = models.DateTimeField(blank=True,null=True,default=timezone.now())
    
    
    def __repr__(self):
        return "<Resume title:"+self.title+">"

    def __unicode__(self):
        return self.__repr__()

    def __str__(self):
        return self.__repr__()

class ResumeCategory(models.Model):
    title = models.CharField(max_length=64)
    entries = models.ManyToManyField(Resume,blank=True)
    org_key = models.IntegerField(blank=True,null=True,default=0)
    
    def list_entries(self):
        return "\n".join([i.__repr__() for i in self.entries.all()])
    
    def get_entries_by_date(self,rev_chron=True):
        if rev_chron:
            return entries.all().order_by('-sort_date')
        else:
            return entries.all().order_by('sort_date')
    
    def __repr__(self):
        return "<Resume Category title:"+self.title+">"

    def __unicode__(self):
        return self.__repr__()

    def __str__(self):
        return self.__repr__()


class Friend(models.Model):
    name = models.CharField(max_length=64,blank=True,null=True,default="")
    title = models.CharField(max_length=128,blank=True,null=True,default="")
    Description = models.CharField(max_length=256,blank=True,null=True,default="")
    url = models.URLField(max_length=128,blank=True,null=True,default="")
    org_key = models.IntegerField(blank=True,null=True,default=0)
    
    def __repr__(self):
        return "<Friend name:"+self.name+">"

    def __unicode__(self):
        return self.__repr__()

    def __str__(self):
        return self.__repr__()

