import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CensoComponent } from './censo/censo.component';
import { ComerciosCensadosComponent } from './comercios-censados/comercios-censados.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { CuentasContablesComponent } from './cuentas-contables/cuentas-contables.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionarTemasComponent } from './gestionar-temas/gestionar-temas.component';
import { LeyIngresosComponent } from './ley-ingresos/ley-ingresos.component';
import { PermisosComponent } from './permisos/permisos.component';
import { ReporteriaComponent } from './reporteria/reporteria.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { SoporteComponent } from './soporte/soporte.component';
import { SharedModule } from '../shared/shared.module';
import { PrincipalRoutingModule } from './principal-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CensoComponent,
    ComerciosCensadosComponent,
    ContabilidadComponent,
    CuentasContablesComponent,
    CuestionariosComponent,
    DashboardComponent,
    FormulariosComponent,
    GestionUsuariosComponent,
    GestionarTemasComponent,
    LayoutPageComponent,
    LeyIngresosComponent,
    PermisosComponent,
    ReporteriaComponent,
    SeguridadComponent,
    SoporteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    FormsModule,
    PrincipalRoutingModule,
    NgChartsModule
  ],
  providers: [
  ]
})
export class PrincipalModule { }