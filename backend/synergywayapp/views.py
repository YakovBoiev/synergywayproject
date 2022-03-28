from rest_framework.viewsets import ModelViewSet
from .serializers import GroupModelSerializer, UserModelSerializer
from .models import Group, User


class GroupModelViewSet(ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
