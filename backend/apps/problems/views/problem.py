from django.http import Http404
from rest_framework import viewsets, views, generics, status
from rest_framework.response import Response

from apps.problems.models import Problem, Attempt
from apps.problems.serializers import ProblemListSerializer, ProblemDetailSerializer
from apps.problems.serializers.attempt import AttemptSerializer
from apps.problems.serializers.problem import ProblemSubmissionSerializer


class ProblemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Problem.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProblemListSerializer
        else:
            return ProblemDetailSerializer


class ProblemSubmissionView(generics.GenericAPIView, views.APIView):
    serializer_class = ProblemSubmissionSerializer

    def post(self, request, id):
        problem = Problem.objects.filter(pk=id).first()
        if not problem:
            raise Http404
        serializer = ProblemSubmissionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        attempt = Attempt.objects.create(
            problem=problem,
            user=request.user,
            source_code=serializer.data['source_code'],
            lang=serializer.data['lang']
        )
        return Response(AttemptSerializer(attempt).data, status=status.HTTP_201_CREATED)
