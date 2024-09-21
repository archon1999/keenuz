from django.db import models


class ContestCategories(models.IntegerChoices):
    COMPETITIVE_PROGRAMMING = 1, 'CompetitiveProgramming'
    TECHNOLOGIES = 2, 'Technologies'
    MATH = 3, 'Math'
    IQ = 4, 'IQ'
