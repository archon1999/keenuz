from django.urls import re_path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

urlpatterns = [
    re_path('daily-task/?$', views.GroupDailyTaskView.as_view()),
]

urlpatterns += router.urls
