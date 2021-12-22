from django.db import models
from rest_framework import serializers
from src.app.caja_comp.models import cajaCompModel

class cajaCompSerializers(serializers.ModelSerializer):
    class Meta:
        model = cajaCompModel
        fields = '__all__' 