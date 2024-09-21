from rest_framework import viewsets

from apps.contests.models import Contest
from apps.contests.serializers import ContestSerializer


class ContestsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
