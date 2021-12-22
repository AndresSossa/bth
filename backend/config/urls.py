"""{{ project_name }} URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/{{ docs_version }}/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views.generic.base import TemplateView
from src.app.cargo.views import *
from src.app.eps.views import *
from src.app.caja_comp.views import *
from src.app.tipo_contrato.views import *
from src.app.centro_costo.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^component/cargo/reg/',saveCargo),
    url(r'^component/cargo/lookup/',lookupCargo),
    url(r'^component/cargo/delete/',deleteCargo),
    url(r'^component/cargo/update/(?P<id>\w+)',lookupCargoID),
    
    url(r'^component/eps/reg/',saveEps),
    url(r'^component/eps/lookup/',lookupEps),
    url(r'^component/eps/delete/',deleteEps),
    url(r'^component/eps/update/(?P<id>\w+)',lookupEpsId),

    url(r'^component/caja_comp/reg/',cajaCompSave),
    url(r'^component/caja_comp/lookup/',lookupCajComp),
    url(r'^component/caja_comp/delete/',deleteCajComp),
    url(r'^component/caja_comp/update/(?P<id>\w+)',lookupIdCajComp),

    url(r'^component/tipo_contrato/reg/',saveTipoContrato),
    url(r'^component/tipo_contrato/update/(?P<id>\w+)',urlLookUpId),
    url(r'^component/tipo_contrato/lookup/',urllookUp),
    url(r'^component/tipo_contrato/delete/',deleteTipoContrato),

    url(r'^component/centro_costo/reg/',saveCentroCosto),
    url(r'^component/centro_costo/lookup',lookupAll),
    url(r'^component/centro_costo/update/(?P<id>\w+)',lookupId),
    url(r'^component/centro_costo/delete/',deleteCentroCosto),
    url(r'', TemplateView.as_view(template_name="home.html"), name="home")
]

