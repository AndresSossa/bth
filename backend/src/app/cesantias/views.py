from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from datetime import datetime,timezone
from src.app.cesantias.models import ModelCesantias
from src.app.cesantias.serializer import cesantiasSerializer

@csrf_exempt
def saveCes(request,*args,**kwargs):
    if request.method=='POST':
        data=list(request.POST.keys())
        formmodel=json.loads(data[0])
        print(formmodel)

        objmodel= ModelCesantias()
        if formmodel['id_ces'] != '':
            objmodel.id_ces=formmodel['id_ces']
        objmodel.tipo_ces=formmodel['tipo_ces']
        objmodel.usuario_actualiza='admin'
        objmodel.fecha_ingreso=datetime.now(timezone.utc)

        objmodel.save()

        return JsonResponse({'RESPONSE':'OK'},safe=False)

def lookupCesId(request,id):
    data= ModelCesantias.objects.filter(id_ces=id)
    serializer = cesantiasSerializer(data,many=True)
    return JsonResponse(serializer.data,safe=False)

def lookupCes(request):
    data = ModelCesantias.objects.all()
    if request.method == 'GET' : 
        serializer = cesantiasSerializer(data,many=True)
        return JsonResponse(serializer.data,safe=False)



@csrf_exempt
def deleteCes(request,*args,**kwargs):
    if request.method =='POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = ModelCesantias.objects.filter(id_ces=formmodel['id_ces'])

        objmodel.delete()

        return JsonResponse({'RESPONSE': 'OK'}, safe=False)