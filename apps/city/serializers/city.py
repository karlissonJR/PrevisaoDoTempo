from rest_framework import serializers

from apps.city.models import City

class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'name', 'state_abbreviation', 'state', 'name_without_accent']