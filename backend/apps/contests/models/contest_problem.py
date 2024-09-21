from django.db import models
from django.urls import reverse

from apps.contests.models.contest import Contest
from apps.problems.models import Problem, Attempt


class ContestProblem(models.Model):
    problems = models.Manager()
    contest = models.ForeignKey(
        to=Contest,
        on_delete=models.CASCADE,
        related_name='problems'
    )
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    symbol = models.CharField(max_length=10)
    ball = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)

    def get_absolute_url(self):
        return reverse('contest_problem', kwargs={
            'problem_symbol': self.symbol,
            'contest_id': self.contest.id,
        })

    @property
    def adopted(self):
        return self.attempts.filter(verdict=Attempt.Verdict.ACCEPTED)

    @property
    def solved(self):
        return self.contestants_info.exclude(
            first_accepted_time__exact=None,
        ).count()

    class Meta:
        ordering = ['symbol']

    def __str__(self):
        return f'{self.contest}.  {self.problem}'
