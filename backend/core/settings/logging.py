import os

if os.environ.get('NO_ROOT') is None:
    LOGGING = {
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'simple': {
                'format': '{levelname} | {asctime} | {filename} | {message}',
                'style': '{',
            },
        },
        'handlers': {
            'file': {
                'level': 'DEBUG',
                'class': 'logging.FileHandler',
                'filename': 'log/django-error.log',
                'formatter': 'simple',
            },
        },
        'loggers': {
            'django': {
                'handlers': ['file'],
                'level': 'ERROR',
            },
        },
    }
else:
    LOGGING = None
