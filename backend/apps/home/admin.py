from django.contrib import admin

from .models import GroupDailyTask


@admin.register(GroupDailyTask)
class GroupDailyTaskAdmin(admin.ModelAdmin):
    pass
