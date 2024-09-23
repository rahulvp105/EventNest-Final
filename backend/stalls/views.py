from django.shortcuts import render
from rest_framework import generics
from .models import Stall
from .serializers import StallSerializer

class StallListView(generics.ListCreateAPIView):
    queryset = Stall.objects.all()
    serializer_class = StallSerializer