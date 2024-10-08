from ckeditor.fields import RichTextField
from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255)
    description = RichTextField()

    def __str__(self):
        return self.title
