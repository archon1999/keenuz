from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken import views

from core import settings
from core.yasg import schema_view

# handler404 = ''
# handler500 = ''

urlpatterns = [
  path('', include('social_django.urls', namespace='social')),
  path('admin/', admin.site.urls),
  path('i18n/', include('django.conf.urls.i18n')),
  path('api/', include('apps.users.urls')),
  path('api/', include('apps.home.urls')),
  path('api/', include('apps.problems.urls')),
  path('api/', include('apps.contests.urls')),
] + static(settings.KEENSettings.MEDIA_URL, document_root=settings.KEENSettings.MEDIA_ROOT)

urlpatterns += [
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', views.obtain_auth_token),
]
