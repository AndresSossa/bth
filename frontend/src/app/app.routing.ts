import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { CargoComponent } from './pages/cargo/cargo.component';
import { FormComponent } from './pages/cargo/form/form.component';
import { EpsComponent } from './pages/eps/eps.component';
import { FormComponentEps } from './pages/eps/form/form.component';
import { CajaCompComponent } from './pages/caja-comp/caja-comp.component';
import { FormComponentCajaComp } from './pages/caja-comp/form/form.component';
import { TipoContratoComponent } from './pages/tipo-contrato/tipo-contrato.component';
import { FormComponentTipoCon } from './pages/tipo-contrato/form/form.component';
import { CentroCostoComponent } from './pages/centro-costo/centro-costo.component';
import { FormComponentCentro } from './pages/centro-costo/form/form.component';

import { PensionComponent } from './pages/pension/pension.component';
import { FormComponentPens } from './pages/pension/form/form.component';
import { CesantiasComponent } from './pages/cesantias/cesantias.component';
import {  FormComponentCes } from './pages/cesantias/form/form.component';
 
export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'cargo',component: CargoComponent, data:{breadcrumb: 'Maestro Cargo'}},
            { path: 'cargo/cargo/reg',component: FormComponent, data:{breadcrumb: 'Registrar Cargo'}},
            { path: 'cargo/cargo/upd/:id',component: FormComponent, data:{breadcrumb: 'Actualizar Cargo'}},
            { path: 'eps',component:EpsComponent, data:{breadcrumb: 'Maestro EPS'}},
            { path: 'eps/eps/reg',component: FormComponentEps, data:{breadcrumb: 'Registrar EPS'} },
            { path: 'eps/eps/upd/:id',component:FormComponentEps, data:{breadcrumb: 'Actualizar EPS'} },
            { path: 'caja_comp', component: CajaCompComponent, data: {breadcrumb: 'Maestro caja de compensación'}},
            { path: 'caja_comp/caja_comp/reg', component: FormComponentCajaComp, data:{breadcrumb: 'Registrar caja de compensación'}},
            { path: 'caja_comp/caja_comp/upd/:id', component: FormComponentCajaComp, data:{breadcrumb: 'Actualizar cada de compensación'}},
            { path: 'tipo_contr', component: TipoContratoComponent, data:{breadcrumb:'Maestro tipo de contrato'}},
            { path: 'tipo_contr/tipo_contr/reg', component:FormComponentTipoCon, data:{breadcrumb:'Registrar tipo de contrato'}},
            { path: 'tipo_contr/tipo_contr/upd/:id',component:FormComponentTipoCon, data:{breadcrumb:'Actualizar tipo de contrato'}},
            { path: 'centro_costo', component:CentroCostoComponent,data:{breadcrumb:'Maestro centro de costo'}},
            { path: 'centro_costo/centro_costo/reg',component:FormComponentCentro, data:{breadcrumb:'Registrar centro de costo'}},
            { path: 'centro_costo/centro_costo/upd/:id',component: FormComponentCentro, data:{breadcrumb: 'Actualizar centro de costo'}},
            { path: 'pension' ,component: PensionComponent, data:{breadcrumb: 'Maestro Pensiones'}},
            { path: 'pension/pension/reg',component: FormComponentPens, data:{breadcrumb: 'Registrar Pension'} },
            { path: 'pension/pension/upd/:id',component:FormComponentPens, data:{breadcrumb: 'Actualizar Pension'} },
            { path: 'cesantias', component: CesantiasComponent, data:{breadcrumb: 'Maestro Cesantias'} },
            { path: 'cesantias/cesantias/reg',component: FormComponentCes, data:{breadcrumb: 'Registrar Cesantias'} },
            { path: 'cesantias/cesantias/upd/:id',component:FormComponentCes, data:{breadcrumb: 'Actualizar Cesantias'} },
        ]
    },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for enable lazy load
    // useHash: true
});