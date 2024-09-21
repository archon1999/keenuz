from django.db import models


class ProblemDifficulty(models.IntegerChoices):
    EASY = 1
    MEDIUM = 2
    HARD = 3
