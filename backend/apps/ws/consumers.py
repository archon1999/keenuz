import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import JsonWebsocketConsumer
from django.utils import translation
from django_q.tasks import async_task
from djangorestframework_camel_case.render import CamelCaseJSONRenderer

from apps.problems.models import Attempt


class KEENConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()
        self.lang = 'en'

    def receive_json(self, content):
        if isinstance(content, str):
            content = json.loads(content)

        event = content['event']
        if event.endswith('-add'):
            obj_id = content['data']
            async_to_sync(self.channel_layer.group_add)(
                f'{event.removesuffix("add")}{obj_id}',
                self.channel_name,
            )

        elif event.endswith('-delete'):
            obj_id = content['data']
            async_to_sync(self.channel_layer.group_discard)(
                f'{event.removesuffix("delete")}{obj_id}',
                self.channel_name,
            )

        if event == 'lang-change':
            self.lang = content['data']

    def attempt_sender(self, event):
        attempt_id = event['attempt_id']
        attempt = Attempt.objects.get(id=attempt_id)
        print(attempt)
        event = 'attempt-update'
        translation.activate(self.lang)
        data = {
            'id': attempt.id,
            'verdict': attempt.verdict,
            'verdictTitle': attempt.get_verdict_display(),
            'time': attempt.time,
            'memory': attempt.memory,
            'testCaseNumber': attempt.test_case_number,
            'balls': attempt.balls,
        }
        self.send(text_data=json.dumps({
            'event': event,
            'data': data,
        }))
