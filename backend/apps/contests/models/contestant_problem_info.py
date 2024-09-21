from django.db import models

from .contest_problem import ContestProblem
from .contestant import Contestant


class ContestantProblemInfo(models.Model):
    problems = models.Manager()
    contestant = models.ForeignKey(
        to=Contestant,
        on_delete=models.CASCADE,
        related_name='problems_info',
    )
    contest_problem = models.ForeignKey(
        to=ContestProblem,
        on_delete=models.CASCADE,
        related_name='contestants_info',
    )

    points = models.IntegerField(default=0)
    penalties = models.IntegerField(default=0)
    attempts_count = models.IntegerField(default=0)
    first_accepted_time = models.DateTimeField(null=True, blank=True)
    the_best = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def get_contest_time(self):
        contest_start_time = self.contest_problem.contest.start_time
        return self.first_accepted_time - contest_start_time

    @property
    def solved(self):
        return bool(self.first_accepted_time)

    class Meta:
        unique_together = [('contestant', 'contest_problem')]
        ordering = ['contestant']
