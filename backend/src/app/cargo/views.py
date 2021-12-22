from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from rest_framework import serializers
from datetime import datetime,timezone
from src.app.cargo.models import CargoModels
from src.app.cargo.serializer import cargoModelSerializer



# Create your views here.

@csrf_exempt
def saveCargo(request, *args, **kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])
        

        objmodel = CargoModels()

        if formmodel['id_carg'] != '':
            objmodel.id_cargo = formmodel['id_carg']
        objmodel.nombre_cargo = formmodel['nom_carg']
        objmodel.usuario_actualiza = 'Admin'
        objmodel.fecha_ingreso = datetime.now(timezone.utc)
        objmodel.save()
        
        return JsonResponse({'RESPONSE':'OK'}, safe=False)

def lookupCargo(request):
    data = CargoModels.objects.all()
    if request.method == 'GET':
        serializer = cargoModelSerializer(data,many=True)
        return JsonResponse(serializer.data,safe=False)

def lookupCargoID(request,id):
    data = CargoModels.objects.filter(id_cargo=id)
    serializer = cargoModelSerializer(data,many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def deleteCargo(request,*args,**kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = CargoModels.objects.filter(id_cargo=formmodel['id_cargo'])

        objmodel.delete()

        return JsonResponse({'RESPONSE':'OK'})