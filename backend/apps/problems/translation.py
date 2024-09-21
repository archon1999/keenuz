from modeltranslation.translator import register, TranslationOptions

from apps.problems.models.problem import Problem


@register(Problem)
class ProblemTranslationOptions(TranslationOptions):
    fields = ('title', 'body', 'input_data', 'output_data', 'comment',)
