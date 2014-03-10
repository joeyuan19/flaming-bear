from django.db import models

# Create your models here.

class Visit(models.Model):
<<<<<<< HEAD
	IP = models.CharField(max_length=100)
	url = models.CharField(max_length=100)
	count = models.IntegerField()
    last_visited = models.DateField(auto_now=True)
=======
    visited_url = models.CharField(max_length=256)
    visiter_protocol = models.CharField(max_length=256)


class Visitor(models.Model):
    visiter_ip = models.CharField(max_length=64)
    visiter_user_agent = models.CharField(max_length=512)
    visits = models.ManyToManyField('Visit')

    def visit_count(self):
        return len(self.visits.all())






>>>>>>> f800e43591eb572e5aa52c2fa73bbc7b2103b715


