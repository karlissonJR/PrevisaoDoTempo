from django.db.models import Q

from rest_framework import viewsets
from rest_framework.response import Response

from apps.city.models import City
from apps.city.serializers.city import CitySerializer

class CityViewset(viewsets.ModelViewSet):

    queryset = City.objects.all()[:10]
    serializer_class = CitySerializer

    def list(self, request, *args, **kwargs):

        search = request.GET.get('search')
        queryset = City.objects.filter(Q(name__startswith=search) | Q(name_without_accent__startswith=search))[:10]

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        data = {'results': serializer.data}

        return Response(data)