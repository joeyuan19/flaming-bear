from django.db import models

# Create your models here.

class Project(models.Model):
    title   = models.CharField(max_length=128,blank=True,null=True,default="")
    body    = models.TextField(blank=True,null=True,default="")
    preview = models.ImageField(upload_to="img/project_previews/",blank=True,null=True,default=None)
    rel_date    = models.CharField(max_length=128,blank=True,null=True,default="")
    url = models.URLField(max_length=128,blank=True,null=True,default="")
    modified = models.DateField(blank=True)

    def save(self,*args,**kwargs):
        self.modified = datetime.datetime.today()
        super(Project,self).save(*args,**kwargs)

class ProjectCategory(models.Model):
    title = models.CharField(max_length=64)
    entries = models.ManyToManyField(Project)

class Contact(models.Model):
    pass

class Resume(models.Model):
    title = models.CharField(max_length=128,blank=True,null=True,default="")
    description = models.TextField(blank=True,null=True,default="")
    relevent_dates = models.CharField(max_length=128,blank=True,null=True,default="")
    modified = models.DateTimeField(blank=True)

    def save(self,*args,**kwargs):
        self.modified = datetime.datetime.today()
        super(Resume,self).save(*args,**kwargs)

class ResumeCategory(models.Model):
    title = models.CharField(max_length=64)
    entries = models.ManyToManyField(Resume)

class Friend(models.Model):
    name = models.CharField(max_length=64,blank=True,null=True,default="")
    title = models.CharField(max_length=128,blank=True,null=True,default="")
    Description = models.CharField(max_length=256,blank=True,null=True,default="")
    url = models.URLField(max_length=128,blank=True,null=True,default="")
    modified = models.DateTimeField(editable=False,blank=True)

    def save(self,*args,**kwargs):
        self.modified = datetime.datetime.today()
        super(Friend,self).save(*args,**kwargs)

