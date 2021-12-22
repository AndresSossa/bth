from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from rest_framework import serializers
from datetime import datetime,timezone


from src.app.centro_costo.models import centroCostoModels
from src.app.centro_costo.serializer import centroCostoSerializer


@csrf_exempt
def saveCentroCosto(request,*args,**kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = centroCostoModels()

        if formmodel['id_centro_costo'] != '':
            objmodel.id_centro_costo = formmodel['id_centro_costo']
        objmodel.centro_costo = formmodel['centro_costo']
        objmodel.usuario_actualiza = 'Admin'
        objmodel.fecha_ingreso = datetime.now(timezone.utc)

        objmodel.save()

        return JsonResponse({'RESPONSE':'OK'},safe=False)

def lookupAll(request):
    data = centroCostoModels.objects.all()
    if request.method == 'GET':
        serializers = centroCostoSerializer(data,many=True)
        return JsonResponse(serializers.data,safe=False)

def lookupId(request,id):
    data = centroCostoModels.objects.filter(id_centro_costo = id)
    if request.method == 'GET':
        serializers = centroCostoSerializer(data,many=True)
        return JsonResponse(serializers.data,safe=False)

@csrf_exempt
def deleteCentroCosto(request,*args,**kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = centroCostoModels.objects.filter(id_centro_costo=formmodel['id'])

        objmodel.delete()

        return JsonResponse({'RESPONSE':'OK'},safe=False)