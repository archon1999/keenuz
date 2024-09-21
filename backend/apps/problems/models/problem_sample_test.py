from django.db import models

from .problem import Problem


class ProblemSampleTest(models.Model):
    input = models.TextField()
    output = models.TextField(blank=True)
    problem = models.ForeignKey(
        to=Problem,
        on_delete=models.CASCADE,
        related_name='sample_tests'
    )

    class Meta:
        ordering = ['id']
