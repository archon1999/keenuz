from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_q.tasks import async_task

from apps.problems.models import Attempt


@receiver(post_save, sender=Attempt)
def attempt_post_save_handler(sender, instance, **kwargs):
    if instance.verdict == Attempt.Verdict.IN_QUEUE:
        async_task('apps.judge.checker.check', instance.id)

    group_name = f'attempt-{instance.id}'
    async_to_sync(get_channel_layer().group_send)(group_name, {
        'attempt_id': instance.id,
        'type': 'attempt.sender',
    })
