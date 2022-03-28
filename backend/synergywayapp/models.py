from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=64, unique=True, blank=False)
    description = models.TextField(max_length=200, blank=True)

    def __str__(self):
        return self.name


class User(models.Model):
    group = models.ForeignKey(Group, on_delete=models.PROTECT)
    username = models.CharField(max_length=64, unique=True, blank=False)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.username



