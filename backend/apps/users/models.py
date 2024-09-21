from django.contrib.auth.models import AbstractUser
from django.db import models

from common.storages import UserAvatarStorage


class Status(models.TextChoices):
    gray = 1, "Gray"
    black = 2, "Black"
    red = 3, "Red"
    yellow = 4, "Yellow"
    green = 5, "Green"


class GenderChoice(models.TextChoices):
    MALE = 'M', 'Male'
    FEMALE = 'F', 'Female'


class RoleChoice(models.TextChoices):
    USER = 'user', 'User'
    STUDENT = 'student', 'Student'
    TEACHER = 'teacher', 'Teacher'


class User(AbstractUser):
    keencoin = models.IntegerField(default=0)
    avatar = models.ImageField(
        default='default_standart.webp',
        storage=UserAvatarStorage
    )
    role = models.CharField(max_length=20, choices=RoleChoice.choices, default=RoleChoice.USER)
    gender = models.CharField(max_length=1, choices=GenderChoice.choices, null=True, blank=True)
    birthday = models.DateField(null=True, blank=True)


class Group(models.Model):
    name = models.CharField(max_length=255, unique=True)
    students = models.ManyToManyField(to=User, limit_choices_to={'role': RoleChoice.STUDENT},
                                      related_name='student_groups')
    teacher = models.ForeignKey(to=User, on_delete=models.CASCADE, limit_choices_to={'role': RoleChoice.TEACHER},
                                related_name='teacher_groups')

    def __str__(self):
        return self.name
