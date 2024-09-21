from django.db import models

from apps.problems.models import Problem
from apps.users.models import Group


class GroupDailyTask(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    date = models.DateField()
