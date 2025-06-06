import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComerciosCensadosComponent } from './comercios-censados/comercios-censados.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { CuentasContablesComponent } from './cuentas-contables/cuentas-contables.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { LeyIngresosComponent } from './ley-ingresos/ley-ingresos.component';
import { PermisosComponent } from './permisos/permisos.component';
import { ReporteriaComponent } from './reporteria/reporteria.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { SoporteComponent } from './soporte/soporte.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { OpcionesComponent } from './opciones/opciones.component';

const routes: Routes = [
    {
        path: '', component: LayoutPageComponent,
        children: [
            // { path: 'opciones', component: OpcionesComponent},
            { path: 'comercios-censados', component: ComerciosCensadosComponent },
            { path: 'contabilidad', component: ContabilidadComponent },
            { path: 'cuentas-contables', component: CuentasContablesComponent },
            { path: 'cuestionarios', component: CuestionariosComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'formularios', component: FormulariosComponent },
            { path: 'gestion-de-usuarios', component: GestionUsuariosComponent },
            { path: 'ley-de-ingresos', component: LeyIngresosComponent },
            { path: 'administracion-de-permisos', component: PermisosComponent },
            { path: 'reporteria', component: ReporteriaComponent },
            { path: 'seguridad', component: SeguridadComponent },
            { path: 'soporte', component: SoporteComponent },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ]
    ,
    exports: [RouterModule]
})
export class PrincipalRoutingModule { }