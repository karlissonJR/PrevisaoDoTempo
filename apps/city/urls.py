from django.urls import path, include

from rest_framework import routers

from apps.city.views import CityViewset

router = routers.DefaultRouter()
router.register(r'', CityViewset)

app_name = 'city'

urlpatterns = [
    path('', include(router.urls))
]