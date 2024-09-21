from pathlib import Path

import dotenv
dotenv.load_dotenv(Path(__file__).parent / 'config.env')

from class_settings import Settings, env
from django.utils.translation import gettext_lazy as _

from .auth_password_validators import AUTH_PASSWORD_VALIDATORS
from .caches import CACHES
from .channel_layers import CHANNEL_LAYERS
from .ckeditor_configs import CKEDITOR_CONFIGS
from .cors import (
    CORS_ALLOW_CREDENTIALS,
    CORS_ALLOW_HEADERS,
    CORS_ALLOWED_ORIGINS,
    CORS_EXPOSE_HEADERS,
    CSRF_COOKIE_HTTPONLY,
    SESSION_COOKIE_HTTPONLY
)
from .databases import DATABASES
from .installed_apps import INSTALLED_APPS
from .locale_paths import LOCALE_PATHS
from .logging import LOGGING
from .middleware import MIDDLEWARE
from .q_cluster import Q_CLUSTER
from .quill_configs import QUILL_CONFIGS
from .rest_framework import REST_FRAMEWORK
from .templates import TEMPLATES
from .social_auth import (
    AUTHENTICATION_BACKENDS,
)
from .aws import (
    AWS_ACCESS_KEY_ID,
    AWS_DEFAULT_ACL,
    AWS_STORAGE_BUCKET_NAME,
    AWS_SECRET_ACCESS_KEY,
    AWS_S3_CUSTOM_DOMAIN,
    AWS_S3_FILE_OVERWRITE,
    AWS_S3_OBJECT_PARAMETERS,
    DEFAULT_FILE_STORAGE,
    MEDIA_URL
)

BASE_DIR = Path(__file__).resolve().parent.parent.parent


class KEENSettings(Settings):
    ALLOWED_HOSTS = ['*']
    INTERNAL_IPS = ['0.0.0.0', '127.0.0.1']
    SECRET_KEY = env()
    DEBUG_PROPAGATE_EXCEPTIONS = True
    DEBUG = env.bool(default=True)
    UNDER_MAINTENANCE = False
    INSTALLED_APPS = INSTALLED_APPS
    MIDDLEWARE = MIDDLEWARE
    ROOT_URLCONF = 'core.urls'
    WSGI_APPLICATION = 'core.wsgi.application'
    ASGI_APPLICATION = "core.asgi.application"
    SITE_ID = 1
    DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'
    DATA_UPLOAD_MAX_NUMBER_FIELDS = 2000

    AUTH_PASSWORD_VALIDATORS = AUTH_PASSWORD_VALIDATORS
    AUTH_USER_MODEL = 'users.User'
    LOGIN_URL = '/login'
    LOGOUT_URL = '/logout'
    LOGIN_REDIRECT_URL = '/'
    LOGOUT_REDIRECT_URL = '/'

    TEMPLATES = TEMPLATES
    DATABASES = DATABASES

    AUTHENTICATION_BACKENDS = AUTHENTICATION_BACKENDS

    LOGGING = LOGGING

    DECIMAL_SEPARATOR = '.'

    LANGUAGE_COOKIE_NAME = 'django_language'
    USE_I18N = True
    USE_L10N = True
    USE_TZ = True
    LANGUAGE_CODE = 'uz-UZ'
    LANGUAGES = (
        ('uz', _('Uzbek')),
        ('en', _('English')),
        ('ru', _('Russian')),
    )
    LOCALE_PATHS = LOCALE_PATHS
    MODELTRANSLATION_DEFAULT_LANGUAGE = 'uz'
    TIME_ZONE = 'Asia/Tashkent'

    STATIC_URL = '/static/'
    STATIC_ROOT = '/static/'
    STATICFILES_FINDERS = (
        'django.contrib.staticfiles.finders.FileSystemFinder',
        'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    )
    # STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
    STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'

    AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY
    AWS_STORAGE_BUCKET_NAME = AWS_STORAGE_BUCKET_NAME
    AWS_DEFAULT_ACL = AWS_DEFAULT_ACL
    AWS_S3_CUSTOM_DOMAIN = AWS_S3_CUSTOM_DOMAIN
    AWS_S3_OBJECT_PARAMETERS = AWS_S3_OBJECT_PARAMETERS
    MEDIA_URL = MEDIA_URL
    DEFAULT_FILE_STORAGE = DEFAULT_FILE_STORAGE
    AWS_S3_FILE_OVERWRITE = AWS_S3_FILE_OVERWRITE

    JET_SIDE_MENU_COMPACT = True

    REST_FRAMEWORK = REST_FRAMEWORK
    CACHES = CACHES
    CHANNEL_LAYERS = CHANNEL_LAYERS
    Q_CLUSTER = Q_CLUSTER
    CKEDITOR_CONFIGS = CKEDITOR_CONFIGS
    QUILL_CONFIGS = QUILL_CONFIGS

    CORS_ALLOW_CREDENTIALS = CORS_ALLOW_CREDENTIALS
    CORS_ALLOW_HEADERS = CORS_ALLOW_HEADERS
    CORS_ALLOWED_ORIGINS = CORS_ALLOWED_ORIGINS
    CORS_EXPOSE_HEADERS = CORS_EXPOSE_HEADERS
    CSRF_COOKIE_HTTPONLY = CSRF_COOKIE_HTTPONLY
    SESSION_COOKIE_HTTPONLY = SESSION_COOKIE_HTTPONLY

    SWAGGER_SETTINGS = {
        'SECURITY_DEFINITIONS': {
            'Token': {
                'type': 'apiKey',
                'name': 'Authorization',
                'in': 'header',
                'description': 'Example format: Bearer {JWT token}'
            }
        },
        'PERSIST_AUTH': True
    }

