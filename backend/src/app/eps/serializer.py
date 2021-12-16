from rest_framework import serializers
from src.app.eps.models import modelEps

class epsModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = modelEps
        fields = '__all__'