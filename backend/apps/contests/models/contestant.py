from django.db import models

from .contest import Contest
from apps.users.models import User
from ..constants import ContestsRatings


class Contestant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    contest = models.ForeignKey(
        to=Contest,
        on_delete=models.CASCADE,
        related_name='contestants',
    )

    points = models.IntegerField(default=0)
    penalties = models.IntegerField(default=0)

    rank = models.IntegerField(null=True)
    rating = models.IntegerField()
    seed = models.FloatField(default=0.0)
    delta = models.IntegerField(default=0)
    perfomance = models.IntegerField(default=0)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def get_new_rating(self):
        return self.rating + self.delta

    def get_rating_title(self):
        for value, label in reversed(ContestsRatings.choices):
            if value <= self.rating:
                return label

    def get_new_rating_title(self):
        new_rating = self.get_new_rating()
        for value, label in reversed(ContestsRatings.choices):
            if value <= new_rating:
                return label

    def get_perfomance_title(self):
        for value, label in reversed(ContestsRatings.choices):
            if value <= self.perfomance:
                return label

    def get_solved(self):
        return self.problems_info.exclude(
            first_accepted_time__exact=None,
        ).count()

    def __lt__(self, other):
        obj_1 = (self.points, -self.penalties)
        obj_2 = (other.points, -other.penalties)
        return obj_1 < obj_2

    class Meta:
        ordering = ['contest', '-points', 'penalties', 'user']

    def __str__(self):
        return f'{self.contest} | {self.user}'
