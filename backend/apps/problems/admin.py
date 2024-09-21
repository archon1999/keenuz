from django.contrib import admin

from .models import Attempt, Problem, ProblemSampleTest, ProblemAvailableLanguage, Category


@admin.register(Attempt)
class AttemptAdmin(admin.ModelAdmin):
    pass


@admin.register(Problem)
class ProblemAdmin(admin.ModelAdmin):
    pass


@admin.register(ProblemSampleTest)
class AProblemSampleTestAdmin(admin.ModelAdmin):
    pass


@admin.register(ProblemAvailableLanguage)
class ProblemAvailableLanguageAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass
