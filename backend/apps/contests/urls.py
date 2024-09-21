from common.api.routers import OptionalSlashRouter

from apps.contests.views import ContestsViewSet

router = OptionalSlashRouter()
router.register('contests', ContestsViewSet, basename='contests')

urlpatterns = router.urls
