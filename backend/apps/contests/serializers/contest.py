from django.db.models import Q
from rest_framework import serializers

from apps.contests.models import Contest


class ContestSerializer(serializers.ModelSerializer):
    contestants_count = serializers.IntegerField(source='contestants.count')
    problems_count = serializers.IntegerField(source='problems.count')
    category_title = serializers.CharField(source='get_category_display')
    status = serializers.IntegerField(source='get_status')

    class Meta:
        model = Contest
        fields = ['id', 'title', 'description', 'status',
                  'start_time', 'finish_time', 'category',
                  'category_title', 'logo',
                  'contestants_count', 'problems_count']
