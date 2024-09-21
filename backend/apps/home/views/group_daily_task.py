from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.home.models import GroupDailyTask
from apps.home.serializers.group_daily_task import GroupDailyTaskSerializer


class GroupDailyTaskView(generics.GenericAPIView, APIView):
    queryset = GroupDailyTask.objects.all()
    serializer_class = GroupDailyTaskSerializer

    def post(self, request):
        serializer = GroupDailyTaskSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer.validated_data.get('problem'):
            print(serializer.validated_data)
            model, created = GroupDailyTask.objects.update_or_create(
                group=serializer.validated_data['group'],
                date=serializer.validated_data['date'],
                defaults={
                    'problem': serializer.validated_data['problem'],
                }
            )
            return Response(GroupDailyTaskSerializer(model).data, status=status.HTTP_201_CREATED)
        else:
            GroupDailyTask.objects.filter(
                group=serializer.validated_data['group'],
                date=serializer.validated_data['date'],
            ).delete()
        return Response()
