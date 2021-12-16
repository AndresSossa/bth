from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from src.app.cargo.models import CargoModels

class cargoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CargoModels
        fields = '__all__'
