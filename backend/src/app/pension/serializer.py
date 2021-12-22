from django.db import models
from django.db.models import fields
from rest_framework import serializers
from src.app.pension.models import pensionModel

class pensionSerializers( serializers.ModelSerializer):
    class Meta:
        model=pensionModel
        fields='__all__'

        