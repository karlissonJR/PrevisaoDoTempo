from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('city/', include('apps.city.urls')),
    path('', include('apps.core.urls'))
]
