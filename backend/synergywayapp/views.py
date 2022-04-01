from rest_framework.viewsets import ModelViewSet
from .serializers import GroupModelSerializer, UserModelSerializer, UserPostModelSerializer
from .models import Group, User


class GroupModelViewSet(ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.request.META.get('REQUEST_METHOD') == "POST":
            return UserPostModelSerializer
        return UserModelSerializer

