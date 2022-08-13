from django.db import models

class City(models.Model):

    name = models.CharField(max_length=100)
    name_without_accent = models.CharField(max_length=100)
    state = models.CharField(max_length=30)
    state_abbreviation = models.CharField(max_length=2)

    def __str__(self):
        return self.name