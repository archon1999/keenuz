from django.db import models

from apps.users.models import User
from .contestant import ContestsRatings


class ContestsRating(models.Model):
    Rating = ContestsRatings

    INITIAL_RATING = 1200

    ratings = models.Manager()
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name='contests_rating',
    )
    rating = models.IntegerField(default=INITIAL_RATING)

    @staticmethod
    def get_title(rating):
        for value, label in reversed(ContestsRating.Rating.choices):
            if value <= rating:
                return label

    class Meta:
        ordering = ['-rating']
