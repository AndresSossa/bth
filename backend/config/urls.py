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
from src.app.cesantias.views import *
from src.app.cargo.views import *
from src.app.eps.views import *
from src.app.pension.views import *

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

    url(r'^component/pension/reg',savePens),
    url(r'^component/pension/update/(?P<id>\w+)',lookupEpsId),
    url(r'^component/pension/lookup/',lookupPens),
    url(r'^component/pension/delete/',deletePens),

    url(r'^component/cesantias/reg/',saveCes),
    url(r'^component/cesantias/update/(?P<id>\w+)',lookupCesId),
    url(r'^component/cesantias/lookup/',lookupCes),
    url(r'^component/cesantias/delete/',deleteCes),

    url(r'', TemplateView.as_view(template_name="home.html"), name="home")
]

