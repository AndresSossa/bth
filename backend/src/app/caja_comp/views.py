from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from rest_framework import serializers
from datetime import datetime,timezone
from src.app.caja_comp.models import cajaCompModel
from src.app.caja_comp.serializer import cajaCompSerializers

@csrf_exempt
def cajaCompSave(request,*args,**kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = cajaCompModel()

        if formmodel['id_caja_comp'] != '':
            objmodel.id_caja_comp = formmodel['id_caja_comp']
        objmodel.codigo = formmodel['cod_cajcomp']
        objmodel.nit = formmodel['nit_cajcomp']
        objmodel.razon_social = formmodel['razon_cajcomp']
        objmodel.usuario_actualiza = 'Admin'
        objmodel.fecha_ingreso = datetime.now(timezone.utc)

        objmodel.save()

        return JsonResponse({'RESPONSE':'OK'},safe=False)

def lookupCajComp(request):
    data = cajaCompModel.objects.all()
    serializers = cajaCompSerializers(data,many=True)
    return JsonResponse(serializers.data, safe=False)

@csrf_exempt
def deleteCajComp(request,*args,**kwargs):
    if request.method == 'POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = cajaCompModel.objects.filter(id_caja_comp = formmodel['id'])

        objmodel.delete()

        return JsonResponse({'RESPONSE':'OK'}, safe=False)

def lookupIdCajComp(request,id):
    data = cajaCompModel.objects.filter(id_caja_comp = id)
    serializers = cajaCompSerializers(data,many=True)
    return JsonResponse(serializers.data,safe=False)