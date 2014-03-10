from django.db import models

# Create your models here.

class Visit(models.Model):
    url = models.CharField(max_length=256)
    date = models.DateTimeField(editable=False)
    visitor = models.ForeignKey('Visitor')
    # Possibly extend this class in the future to make a tree
    # that gives something like "/ -> /projects -> /resume -> /derp -> / ->
    # projects/asciiart"

    def get_visitor(self):
        return "IP: " + self.visitor.ip

    def save(self,*args,**kwargs):
        if not self.id:
            self.date = datetime.datetime.today()
        return super(Visitor,self).save(*args,**kwargs)

class Visitor(models.Model):
    ip = models.CharField(max_length=64)
    user_agent = models.CharField(max_length=512)
    visits = models.ManyToManyField(Visit,related_name='url_visit')
    first_visit = models.DateTimeField(editable=False)
    last_visit = models.DateTimeField()

    def save(self,*args,**kwargs):
        if not self.id:
            self.first_visit = datetime.datetime.today()
        self.last_visit = datetime.datetime.today()
        print self.first_visit
        return super(Visitor,self).save(*args,**kwargs)

    def visit_count(self):
        return len(self.visits.all())

    def list_visits(self):
        li = ""
        for visit in self.visits.all():
            li += visit.url + " on " + date + "\n"
        return li[:-1]


