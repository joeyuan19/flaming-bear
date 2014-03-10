from django.db import models

# Create your models here.

class Visit(models.Model):
    url = models.CharField(max_length=256)
    date = models.DateField(auto_now=True)
    # Possibly extend this class in the future to make a tree
    # that gives something like "/ -> /projects -> /resume -> /derp -> / ->
    # projects/asciiart"

class Visitor(models.Model):
    ip = models.CharField(max_length=64)
    user_agent = models.CharField(max_length=512)
    visits = models.ManyToManyField(Visit)

    def visit_count(self):
        return len(self.visits.all())

    def list_visits(self):
        li = ""
        for visit in self.visits.all():
            li += visit.url + " on " + date + "\n"
        return li[:-1]




