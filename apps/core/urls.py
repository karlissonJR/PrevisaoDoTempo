from django.urls import path

from apps.core.views import index

app_name = 'core'

urlpatterns = [
    path('', index)
]