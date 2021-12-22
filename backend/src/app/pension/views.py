from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse,JsonResponse
from datetime import datetime,timezone
from src.app.pension.models import pensionModel
from src.app.pension.serializer import pensionSerializers


@csrf_exempt
def savePens(request,*args,**kwargs):
    if request.method=='POST':
        data=list(request.POST.keys())
        formmodel=json.loads(data[0])
        print(formmodel)

        objmodel= pensionModel()
        if formmodel['id_pens'] != '':
            objmodel.id_pens=formmodel['id_pens']
        objmodel.codigo_pens=formmodel['cod_pens']
        objmodel.nit_pens=formmodel['nit_pens']
        objmodel.razon_social=formmodel['razon_pens']
        objmodel.usuario_actualiza='admin'
        objmodel.fecha_ingreso=datetime.now(timezone.utc)

        objmodel.save()

        return JsonResponse({'RESPONSE':'OK'},safe=False)


def lookupEpsId(request,id):
    data= pensionModel.objects.filter(id_pens=id)
    serializer = pensionSerializers(data,many=True)
    return JsonResponse(serializer.data,safe=False)


def lookupPens(request):
    data = pensionModel.objects.all()
    if request.method == 'GET' : 
        serializer = pensionSerializers(data,many=True)
        return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def deletePens(request,*args,**kwargs):
    if request.method =='POST':
        data = list(request.POST.keys())
        formmodel = json.loads(data[0])

        objmodel = pensionModel.objects.filter(id_pens=formmodel['id_pens'])

        objmodel.delete()

        return JsonResponse({'RESPONSE': 'OK'})