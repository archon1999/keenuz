from django.contrib import admin

from .models import Contestant, ContestProblem, Contest, ContestantProblemInfo, ContestsRating


@admin.register(Contestant)
class ContestantAdmin(admin.ModelAdmin):
    pass


@admin.register(Contest)
class ContestAdmin(admin.ModelAdmin):
    pass


@admin.register(ContestProblem)
class ContestProblemAdmin(admin.ModelAdmin):
    pass


@admin.register(ContestantProblemInfo)
class ContestantProblemInfoAdmin(admin.ModelAdmin):
    pass


@admin.register(ContestsRating)
class ContestsRatingsAdmin(admin.ModelAdmin):
    pass
