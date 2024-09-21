from django.urls import path, re_path

from apps.problems.views.problem import ProblemSubmissionView
from common.api.routers import OptionalSlashRouter

from apps.problems.views import ProblemViewSet

router = OptionalSlashRouter()
router.register('problems', ProblemViewSet, basename='problems')

urlpatterns = [
    re_path(r'problems/(?P<id>\d+)/submit/?$', ProblemSubmissionView.as_view(), name='problem-submit'),
]

urlpatterns += router.urls
