from django.db import models
from django.utils import timezone
import datetime

# Create your models here.

class Visit(models.Model):
    url = models.CharField(max_length=256)
    date = models.DateTimeField(editable=False)
    visitor = models.ForeignKey('Visitor')
    # Possibly extend this class in the future to make a tree
    # that gives something like "/ -> /projects -> /resume -> /derp -> / ->
    # projects/asciiart"

    def __repr__(self):
        return "<Visit url:" + self.url + " from:" + self.visitor.ip + ">"
    
    def __unicode__(self):
        return self.__repr__()

    def __str__(self):
        return self.__repr__()

    def get_visitor(self):
        return "IP: " + self.visitor.ip

    def save(self,*args,**kwargs):
        if not self.id:
            self.date = timezone.now() 
        return super(Visit,self).save(*args,**kwargs)

class Visitor(models.Model):
    ip = models.CharField(max_length=64,null=True,blank=True,default="-1.-1.-1.-1")
    user_agent = models.CharField(max_length=512, null=True,blank=True,default="")
    visits = models.ManyToManyField(Visit,related_name='url_visit')
    first_visit = models.DateTimeField(editable=False)
    last_visit = models.DateTimeField()
    #alias = models.ForeignKey('Alias',null=True,blank=True,default=None)

    def save(self,*args,**kwargs):
        if not self.id:
            self.first_visit = timezone.now()
        self.last_visit = timezone.now()
        return super(Visitor,self).save(*args,**kwargs)

    def __str__(self):
        return self.__repr__()

    def __unicode__(self):
        return self.__repr__()

    def __repr__(self):
        return "<Visitor ip=" + self.ip + ">"

    def visit_count(self):
        return len(self.visits.all())

    def list_visits(self):
        li = ""
        for visit in self.visits.all():
            li += visit.url + " on " + str(visit.date) + "\n"
        return li[:-1]
"""
class Alias(models.Model):
    ips = models.ManyToManyField(Visitor,related_name="alias_ips")
    name = models.CharField(max_length=64)

    def get_visits(self):
        count = 0
        for ip in self.ips.all():
            count += ip.visit_count()
        return count
    
    def get_ip_count(self):
        return len(self.ips.all())

    def __str__(self):
        return "<Alias " + self.name + ">"
    
    def __unicode__(self):
        return self.__str__()

    def __repr__(self):
        return self.__str__()
"""
        


