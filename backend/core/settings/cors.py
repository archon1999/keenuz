CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    'http://localhost:4200',
    'http://127.0.0.1:8000',
]

CORS_ALLOW_HEADERS = [
    'django-language',
    "accept",
    'access-control-allow-origin',
    'access-control-allow-credentials',
    "accept-encoding",
    "authorization",
    "content-type",
    "set-cookie",
    "dnt",
    "origin",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]

CORS_EXPOSE_HEADERS = [
    'date',
    'Date',
]

CSRF_COOKIE_HTTPONLY = True
SESSION_COOKIE_HTTPONLY = True
