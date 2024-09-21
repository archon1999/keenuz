DEFAULT_APPS = [
    'django.contrib.humanize',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

LOCAL_APPS = [
    'apps.users',
    'apps.problems',
    'apps.contests',
    'apps.courses',
    'apps.home'
]

THIRD_PARTY_APPS = [
    'corsheaders',
    'django_q',
    'django_filters',
    'modeltranslation',
    'django_quill',
    'rest_framework',
    'ckeditor',
    'channels',
    'django_extensions',
    'rest_framework.authtoken',
    'nested_inline',
    'storages',
    'solo',
    'drf_yasg',
]

INSTALLED_APPS = THIRD_PARTY_APPS + DEFAULT_APPS + LOCAL_APPS
