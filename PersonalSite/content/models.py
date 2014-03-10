from django.db import models

# Create your models here.

class ProjectModel(models.Model):
    title   = models.CharField(max_length=128)
    body    = models.TextField()
    preview = models.ImageField()
    date    = models.CharField()
    date_modified = models.DateField(auto_now=True)
    date_created  = models.DateField(auto_now_add=True)

class ContactModel(models.Model):
    pass

class ResumeModel(models.Model):
    title = models.Charfield(max_length=128)
    description = models.TextField()
    relevent_dates = models.CharField(max_length=128)


class FriendModel(models.Model):
    name = models.CharField(max_length=64)
    title = models.CharField(max_length=128)
    Description = models.CharField(max_length=256)
    url = models.URLField()

