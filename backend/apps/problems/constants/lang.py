from django.db import models


class Lang(models.TextChoices):
    PYTHON = 'py', 'Python 3.12'
    CPP = 'cpp', 'C++ 23'
    R = 'r', 'R Lang 4.1'
    HASKELL = 'hs', 'Haskell 8'
    KOTLIN = 'kt', 'Kotlin 1.8'
    C = 'c', 'C11'
    PHP = 'php', 'PHP 8.1'
    CSHARP = 'cs', 'C# 11'
    JS = 'js', 'NodeJS 21'
    JAVA = 'java', 'Java 19'
    RUST = 'rs', 'Rust 1.71'
    SQL = 'sql', 'SQL'
    HTML = 'html', 'HTML 5'
    BASH = 'bash', 'Bash'
    TEXT = 'text', 'Text'
    GO = 'go', 'Go 1.18'
