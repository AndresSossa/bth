from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from datetime import datetime,timezone
from src.app.eps.models import modelEps
from src.app.eps.serializer import epsModelSerializer, serializers

@csrf_exempt
def saveEps(request,*args,**kwargs):
    if request.method=='POST':
        data=list(request.POST.keys())
        formmodel=json.loads(data[0])
        print(formmodel)

        objmodel= modelEps()
        if formmodel['id_eps'] != '':
            objmodel.id_eps=formmodel['id_eps']
        objmodel.codigo_eps=formmodel['cod_eps']
        objmodel.nit_eps=formmodel['nit_eps']
        objmodel.razon_social=formmodel['razon_eps']
        objmodel.usuario_actualiza='admin'
        objmodel.fecha_ingreso=datetime.now(timezone.utc)

        objmodel.save()

        return JsonResponse({'RESPONSE':'OK'},safe=False)

def lookupEps(request):
    data = modelEps.objects.all()
    if request.method == 'GET' : 
        serializer = epsModelSerializer(data,many=True)
        return JsonResponse(serializer.data,safe=False)


@csrf_exempt
def deleteEps(request,*args,**kwargs):
    if request.method =='POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = modelEps.objects.filter(id_eps=formmodel['id_eps'])

        objmodel.delete()

        return JsonResponse({'RESPONSE': 'OK'})

def lookupEpsId(request,id):
    data= modelEps.objects.filter(id_eps=id)
    serializer = epsModelSerializer(data,many=True)
    return JsonResponse(serializer.data,safe=False)
