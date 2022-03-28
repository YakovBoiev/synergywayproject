from rest_framework.viewsets import ModelViewSet
from .serializers import GroupModelSerializer
from .models import Group


class GroupModelViewSet(ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupModelSerializer
