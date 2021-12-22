from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from rest_framework import serializers
from datetime import datetime,timezone

from src.app.tipo_contrato.models import tipoContratoModel
from src.app.tipo_contrato.serializer import tipoContratoSerializer


@csrf_exempt
def saveTipoContrato(request, *args, **kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = tipoContratoModel()

        if formmodel['id_contrato'] != '':
            objmodel.id_tipo_contrato = formmodel['id_contrato']
        objmodel.tipo_contrato = formmodel['tipo_contra']
        objmodel.usuario_actualiza = 'Admin'
        objmodel.fecha_ingreso = datetime.now(timezone.utc)

        objmodel.save()

        return JsonResponse({'RESPONSE':'OK'},safe=False)



def urlLookUpId(request,id):
    data = tipoContratoModel.objects.filter(id_tipo_contrato = id)
    serializers = tipoContratoSerializer(data,many=True)
    return JsonResponse(serializers.data,safe=False)

def urllookUp(request):
    data = tipoContratoModel.objects.all()
    serializers = tipoContratoSerializer(data,many=True)
    return JsonResponse(serializers.data,safe=False)


@csrf_exempt
def deleteTipoContrato(request, *args, **kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = tipoContratoModel.objects.filter(id_tipo_contrato = formmodel['id'])

        objmodel.delete()

        return JsonResponse({'RESPONSE':'OK'},safe=False) 

