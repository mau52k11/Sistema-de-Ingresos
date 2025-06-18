import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AgrupacionDocumentoFuenteComponent } from "./agrupacion-documento-fuente/agrupacion-documento-fuente.component";
import { AgrupacionLineaPolizaComponent } from "./agrupacion-linea-poliza/agrupacion-linea-poliza.component";
import { AgrupacionPolizaComponent } from "./agrupacion-poliza/agrupacion-poliza.component";
import { EstatusPolizaComponent } from "./estatus-poliza/estatus-poliza.component";
import { EstructuraCuentasComponent } from "./estructura-cuentas/estructura-cuentas.component";
import { GrupoUnidadesResponsablesComponent } from "./grupo-unidades-responsables/grupo-unidades-responsables.component";
import { UnidadesResponsablesComponent } from "./unidades-responsables/unidades-responsables.component";
import { UnidadesEjecutorasComponent } from "./unidades-ejecutoras/unidades-ejecutoras.component";
import { MomentoContableComponent } from "./momento-contable/momento-contable.component";
import { OrigenPolizaComponent } from "./origen-poliza/origen-poliza.component";
import { SubtipoDocumentoInternoComponent } from "./subtipo-documento-interno/subtipo-documento-interno.component";
import { TipoDocumentoFuenteComponent } from "./tipo-documento-fuente/tipo-documento-fuente.component";
import { TipoDocumentoInternoComponent } from "./tipo-documento-interno/tipo-documento-interno.component";
import { TipoPeriodoComponent } from "./tipo-periodo/tipo-periodo.component";
import { TipoPolizaComponent } from "./tipo-poliza/tipo-poliza.component";
import { TipoVinculacionComponent } from "./tipo-vinculacion/tipo-vinculacion.component";

const routes: Routes = [
    { path: 'agrupacion-de-documentos-fuente', component: AgrupacionDocumentoFuenteComponent },
    { path: 'agrupaion-de-linea-de-poliza', component: AgrupacionLineaPolizaComponent },
    { path: 'agrupacion-de-poliza', component: AgrupacionPolizaComponent },
    { path: 'estatus-de-poliza', component: EstatusPolizaComponent },
    { path: 'estructura-de-cuentas', component:EstructuraCuentasComponent },
    { path: 'grupo-unidades-responsables', component: GrupoUnidadesResponsablesComponent },
    { path: 'momento-contable', component: MomentoContableComponent },
    { path: 'origen-de-poliza', component: OrigenPolizaComponent },
    { path: 'subtipo-de-documento-interno', component:SubtipoDocumentoInternoComponent },
    { path: 'tipo-de-documento-fuente', component: TipoDocumentoFuenteComponent },
    { path: 'tipo-de-documento-interno', component: TipoDocumentoInternoComponent },
    { path: 'tipo-de-periodo', component: TipoPeriodoComponent },
    { path: 'tipo-de-poliza', component: TipoPolizaComponent },
    { path: 'tipo-de-vinculacion', component: TipoVinculacionComponent },
    { path: 'unidades-responsables', component: UnidadesResponsablesComponent },
    { path: 'unidades-ejecutoras', component: UnidadesEjecutorasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ApoyoRoutingModule { }