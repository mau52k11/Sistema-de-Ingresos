import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './principal/dashboard/dashboard.component';
import { CensoComponent } from './principal/censo/censo.component';
import { ReporteriaComponent } from './principal/reporteria/reporteria.component';
import { SoporteComponent } from './principal/soporte/soporte.component';
import { ContabilidadComponent } from './principal/contabilidad/contabilidad.component';
import { GestionarTemasComponent } from './principal/gestionar-temas/gestionar-temas.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CuentasContablesComponent } from './principal/cuentas-contables/cuentas-contables.component';
import { LeyIngresosComponent } from './principal/ley-ingresos/ley-ingresos.component';
import { CuestionariosComponent } from './principal/cuestionarios/cuestionarios.component';
import { FormulariosComponent } from './principal/formularios/formularios.component';
import { ComerciosCensadosComponent } from './principal/comercios-censados/comercios-censados.component';
import { GestionUsuariosComponent } from './principal/gestion-usuarios/gestion-usuarios.component';
import { PermisosComponent } from './principal/permisos/permisos.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
