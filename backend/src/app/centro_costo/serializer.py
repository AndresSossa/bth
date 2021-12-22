from rest_framework import serializers
from src.app.centro_costo.models import centroCostoModels

class centroCostoSerializer(serializers.ModelSerializer):
    class Meta:
        model = centroCostoModels
        fields = '__all__'