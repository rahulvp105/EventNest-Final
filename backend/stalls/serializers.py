from rest_framework import serializers
from .models import Stall

class StallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stall
        fields = ['id', 'name', 'description', 'rent_price', 'available', 'image']