from django.db import models

from .problem import Problem
from ..constants import Lang


class ProblemAvailableLanguage(models.Model):
    problem = models.ForeignKey(
        to=Problem,
        on_delete=models.CASCADE,
        related_name='available_languages'
    )
    lang = models.CharField(max_length=10, choices=Lang.choices)
    code_template = models.TextField(null=True, blank=True)

    class Meta:
        unique_together = [('problem', 'lang')]
