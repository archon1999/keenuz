CKEDITOR_CONFIGS = {
    'default': {
        'toolbar_DefaultToolbarConfig': [
            {
                'name': 'code',
                'items': ['Mathjax', 'CodeSnippet'],
            },
            {
                'name': 'format',
                'items': ['Format', 'FontSize'],
            },
            {
                'name': 'basicstyles',
                'items': ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript',
                          'Superscript', ],
            },
            {
                'name': 'clipboard',
                'items': ['Undo', 'Redo', ],
            },
            {
                'name': 'paragraph',
                'items': ['NumberedList', 'BulletedList', 'Outdent', 'Indent',
                          'HorizontalRule', 'JustifyLeft', 'JustifyCenter',
                          'JustifyRight', 'JustifyBlock', ],
            },
            {
                'name': 'extra',
                'items': ['Link', 'Unlink', 'Blockquote', 'Image', 'Table'],
            },
            {
                'name': 'source',
                'items': ['Maximize', 'Source', ],
            },
        ],
        'title': False,

        'toolbar': 'DefaultToolbarConfig',

        'format_tags': 'p;pre;h1;h2;h3;h4;h5;h6',

        'removeDialogTabs': ';'.join([
            'image:advanced',
            'image:Link',
            'link:upload',
            'table:advanced',
            'tableProperties:advanced',
        ]),
        'linkShowTargetTab': False,
        'linkShowAdvancedTab': False,

        'height': '500',
        'width': '100%',
        'forcePasteAsPlainText ': True,

        'mathJaxClass': 'mathjax-latex',
        'mathJaxLib': 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_SVG',
        'tabSpaces': 4,
        'extraPlugins': 'mathjax, codesnippet',

        'codeSnippet_theme': 'atelier-health.light',
        'codeSnippet_languages': {
            'python': 'Python',
        },
    }
}
