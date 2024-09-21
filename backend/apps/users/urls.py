from django.urls import re_path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register('groups', views.GroupViewSet, basename='groups')
router.register(r'groups/(?P<group_id>\d+)/students', views.StudentViewSet, basename='students')

urlpatterns = [
    re_path('login/?$', views.login),
    re_path('logout/?$', views.logout),
    re_path('me/?$', views.me),
    re_path('set-language/?$', views.set_language),
    re_path(r'groups/(?P<group_id>\d+)/students/(?P<id>\d+)/results/?$', views.StudentResultViewSet.as_view()),
]

urlpatterns += router.urls
