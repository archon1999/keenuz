from django.db import models
from .problem import Problem
from ..constants import Lang, AttemptVerdict
from ...users.models import User


class Attempt(models.Model):
    Lang = Lang
    Verdict = AttemptVerdict

    user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        related_name='attempts',
        null=True,
        blank=True,
    )
    problem = models.ForeignKey(
        to=Problem,
        on_delete=models.CASCADE,
        related_name='attempts',
    )

    verdict = models.IntegerField(choices=Verdict.choices, default=Verdict.IN_QUEUE)
    lang = models.CharField(max_length=10, choices=Lang.choices)

    test_case_number = models.IntegerField(default=0, null=True)
    time = models.PositiveIntegerField(default=0)
    memory = models.PositiveIntegerField(default=0)

    source_code = models.TextField(blank=True, default='')
    error_message = models.TextField(blank=True, default='')

    balls = models.FloatField(null=True, blank=True)
    temp = models.TextField(null=True, blank=True)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-id',)

    def __str__(self):
        return f'{self.id} | {self.user} | {self.problem} | {self.get_verdict_display()} | {self.test_case_number}'
