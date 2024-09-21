from ckeditor.fields import RichTextField
from django.db import models
from django.utils import timezone

from apps.users.models import User
from common.storages import ContestLogoStorage
from ..constants import ContestStatuses, ContestCategories


class Contest(models.Model):
    Status = ContestStatuses
    Category = ContestCategories

    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = RichTextField(null=True, blank=True)
    start_time = models.DateTimeField()
    finish_time = models.DateTimeField()
    category = models.IntegerField(choices=Category.choices)
    logo = models.ImageField(storage=ContestLogoStorage, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def get_status(self):
        if self.start_time > timezone.now():
            return Contest.Status.NotStarted
        elif self.finish_time < timezone.now():
            return Contest.Status.Finished
        else:
            return Contest.Status.Already

    class Meta:
        ordering = ('-start_time',)

    def __str__(self):
        return self.title
