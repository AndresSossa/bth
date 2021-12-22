from rest_framework import serializers
from src.app.cesantias.models import ModelCesantias

class cesantiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelCesantias
        fields = '__all__'