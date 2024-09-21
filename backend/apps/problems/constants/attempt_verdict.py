from django.db import models


class AttemptVerdict(models.IntegerChoices):
    IN_QUEUE = -2,
    RUNNING = -1
    JUDGEMENT_FAILED = 0
    ACCEPTED = 1
    WRONG_ANSWER = 2
    TIME_LIMIT_EXCEEDED = 3
    RUNTIME_ERROR = 4
    OUTPUT_FORMAT_ERROR = 5
    MEMORY_LIMIT_EXCEEDED = 6
    REJECTED = 7
    COMPILATION_ERROR = 8
    SYNTAX_ERROR = 10
