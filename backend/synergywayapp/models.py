from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=64, unique=True, blank=False)
    description = models.TextField(max_length=200, blank=True)

