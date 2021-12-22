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