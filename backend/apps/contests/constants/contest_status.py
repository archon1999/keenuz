from django.db import models


class ContestStatuses(models.IntegerChoices):
    NotStarted = -1
    Already = 0
    Finished = 1
