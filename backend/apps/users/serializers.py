import random

from rest_framework import serializers

from apps.users.models import User, Group, Status


class UserAuthSerializer(serializers.ModelSerializer):
    avatar = serializers.CharField(source='avatar.url')

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'avatar', 'role']


class StudentSerializer(serializers.ModelSerializer):
    result = serializers.SerializerMethodField()

    @staticmethod
    def get_result(obj):
        return 1

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'result', 'birthday', 'gender']


class StudentResultItemSerializer(serializers.Serializer):
    status = serializers.SerializerMethodField()
    date = serializers.DateField()

    @staticmethod
    def get_status(obj):
        return int(random.choice(Status.values))


class StudentResultSerializer(serializers.Serializer):
    student = StudentSerializer(read_only=True)
    results = StudentResultItemSerializer(many=True, read_only=True)


class GroupSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True)

    class Meta:
        model = Group
        fields = ['id', 'name', 'students']
