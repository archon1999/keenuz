from rest_framework import serializers

from apps.home.models import GroupDailyTask
from apps.problems.models import Problem


class GroupDailyTaskSerializer(serializers.ModelSerializer):
    problem = serializers.PrimaryKeyRelatedField(required=False, queryset=Problem.objects.all())

    class Meta:
        model = GroupDailyTask
        fields = '__all__'
