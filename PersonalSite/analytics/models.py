from django.db import models

# Create your models here.

class Visit(models.Model):
    visited_url = models.CharField(max_length=256)
    visiter_protocol = models.CharField(max_length=256)


class Visitor(models.Model):
    visiter_ip = models.CharField(max_length=64)
    visiter_user_agent = models.CharField(max_length=512)
    visits = models.ManyToManyField('Visit')

    def visit_count(self):
        return len(self.visits.all())








