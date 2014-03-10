from django.db import models

# Create your models here.

class Project(models.Model):
    title   = models.CharField(max_length=128)
    body    = models.TextField()
    preview = models.ImageField(upload_to="img/project_previews/")
    rel_date    = models.CharField(max_length=128)
    modified = models.DateField(auto_now=True)

    def __save__(self,*args,**kwargs):
        self.modified = datetime.datetime.today()
        super(Project,self).save(*args,**kwargs)

class Contact(models.Model):
    pass


class Resume(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField()
    relevent_dates = models.CharField(max_length=128)
    modified = models.DateTimeField()

    def __save__(self,*args,**kwargs):
        self.modified = datetime.datetime.today()
        super(Resume,self).save(*args,**kwargs)


class Friend(models.Model):
    name = models.CharField(max_length=64)
    title = models.CharField(max_length=128)
    Description = models.CharField(max_length=256)
    url = models.URLField()
    modified = models.DateTimeField(editable=False)

    def __save__(self,*args,**kwargs):
        self.modified = datetime.datetime.today()
        super(Friend,self).save(*args,**kwargs)

