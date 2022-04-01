from rest_framework.serializers import ModelSerializer
from .models import Group, User


class GroupModelSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class UserModelSerializer(ModelSerializer):
    group = GroupModelSerializer()

    class Meta:
        model = User
        fields = '__all__'


class UserPostModelSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'



