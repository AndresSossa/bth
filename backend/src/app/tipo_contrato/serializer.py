from django.db import models
from rest_framework import serializers
from src.app.tipo_contrato.models import tipoContratoModel

class tipoContratoSerializer(serializers.ModelSerializer):
    class Meta:
        model =  tipoContratoModel
        fields =  '__all__'