import os
from io import BytesIO

from PIL import Image
from storages.backends.s3boto3 import S3Boto3Storage


def convert_to_webp(source: BytesIO):
    image = Image.open(source)
    io = BytesIO()
    image.save(io, format='webp')
    return io


class MediaStorage(S3Boto3Storage):
    bucket_name = 'cpython'
    location = 'media'

    def save(self, name, content, **kwargs):
        name = os.path.splitext(name)[0] + '.webp'
        return super().save(name, convert_to_webp(content), **kwargs)


class UserAvatarStorage(MediaStorage):
    location = 'media/images/avatars'


class ContestLogoStorage(S3Boto3Storage):
    bucket_name = 'cpython'
    location = 'media/images/contest-logo'
