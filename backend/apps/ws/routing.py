from django.urls import re_path

from .consumers import KEENConsumer

websocket_urlpatterns = [
    re_path('ws', KEENConsumer.as_asgi()),
]
