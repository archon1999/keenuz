from ckeditor.fields import RichTextField
from django.db import models

from apps.problems.constants import ProblemDifficulty
from apps.users.models import User
from .category import Category


class Problem(models.Model):
    Difficulty = ProblemDifficulty

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        related_name='problems',
        default=207,
    )
    time_limit = models.PositiveIntegerField(default=1000, null=True, blank=True)
    memory_limit = models.PositiveIntegerField(default=256, null=True, blank=True)

    title = models.CharField(max_length=255)
    body = RichTextField(blank=True, null=True)
    input_data = RichTextField(blank=True, null=True)
    output_data = RichTextField(blank=True, null=True)
    comment = RichTextField(blank=True, null=True)

    difficulty = models.IntegerField(choices=ProblemDifficulty.choices)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.id}. {self.title}'
