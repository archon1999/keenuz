# Generated by Django 4.2.9 on 2024-09-21 07:19

import common.storages
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='default_standart.webp', storage=common.storages.UserAvatarStorage, upload_to=''),
        ),
    ]
