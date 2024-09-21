QUILL_CONFIGS = {
    'default': {
        'modules': {
            'syntax': True,
            'toolbar': [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block', 'formula'],

                ['image', 'link'],

                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'script': 'sub'}, {'script': 'super'}],
                [{'indent': '-1'}, {'indent': '+1'}],

                [{'size': ['small', False, 'large', 'huge']}],
                [{'header': [1, 2, 3, 4, 5, 6, False]}],

                [{'color': []}, {'background': []}],
                [{'align': []}],

                ['clean']
            ]
        }
    }
}
