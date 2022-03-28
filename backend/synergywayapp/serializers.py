from rest_framework.serializers import ModelSerializer
from .models import Group


class GroupModelSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

