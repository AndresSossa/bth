import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { AppSettings } from './app.settings';

import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { CargoComponent } from './pages/cargo/cargo.component';
import { FormComponent } from './pages/cargo/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EpsComponent } from './pages/eps/eps.component'
import { FormComponentEps } from './pages/eps/form/form.component';
import { CajaCompComponent } from './pages/caja-comp/caja-comp.component';
import { FormComponentCajaComp } from './pages/caja-comp/form/form.component';
import { TipoContratoComponent } from './pages/tipo-contrato/tipo-contrato.component';
import { FormComponentTipoCon } from './pages/tipo-contrato/form/form.component';
import { CentroCostoComponent } from './pages/centro-costo/centro-costo.component';
import { FormComponentCentro } from './pages/centro-costo/form/form.component'
import { PensionComponent } from './pages/pension/pension.component'
import { FormComponentPens } from './pages/pension/form/form.component';
import { CesantiasComponent } from './pages/cesantias/cesantias.component';
import { FormComponentCes } from './pages/cesantias/form/form.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,     
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLf9Ywk47zipEtorDewwMmB3JtuXdzYL4'
    }), 
    PerfectScrollbarModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule,
    PipesModule,
    routing,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    BlankComponent,
    SearchComponent,
    NotFoundComponent,
    ErrorComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    CargoComponent,
    FormComponent,
    EpsComponent,
    FormComponentEps,
    CajaCompComponent,
    FormComponentCajaComp,
    TipoContratoComponent,
    FormComponentTipoCon,
    CentroCostoComponent,
    FormComponentCentro,
    PensionComponent,
    FormComponentPens,
    CesantiasComponent,
    FormComponentCes
    
  ],
  entryComponents:[
    VerticalMenuComponent
  ],
  providers: [ 
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



