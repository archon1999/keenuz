from django.db import models


class ContestsRatings(models.IntegerChoices):
    NEOFIT = 0
    RITOR = 1200
    LIKTOR = 1400
    LEGAT = 1600
    MASTER = 1800
    MAGISTR = 2000
    PRETOR = 2200
    ARCHON = 2400
    POLEMARCH = 2500
    MALIK = 2600
    MAYAR = 2800
    VALAR = 3000
    RIDWAN = 3200
