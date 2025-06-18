import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AgrupacionDocumentoFuenteComponent } from "./agrupacion-documento-fuente/agrupacion-documento-fuente.component";
import { AgrupacionLineaPolizaComponent } from "./agrupacion-linea-poliza/agrupacion-linea-poliza.component";
import { AgrupacionPolizaComponent } from "./agrupacion-poliza/agrupacion-poliza.component";
import { EstatusPolizaComponent } from "./estatus-poliza/estatus-poliza.component";
import { EstructuraCuentasComponent } from "./estructura-cuentas/estructura-cuentas.component";
import { GrupoUnidadesResponsablesComponent } from "./grupo-unidades-responsables/grupo-unidades-responsables.component";
import { MomentoContableComponent } from "./momento-contable/momento-contable.component";
import { OrigenPolizaComponent } from "./origen-poliza/origen-poliza.component";
import { SubtipoDocumentoInternoComponent } from "./subtipo-documento-interno/subtipo-documento-interno.component";
import { TipoDocumentoFuenteComponent } from "./tipo-documento-fuente/tipo-documento-fuente.component";
import { TipoDocumentoInternoComponent } from "./tipo-documento-interno/tipo-documento-interno.component";
import { TipoPeriodoComponent } from "./tipo-periodo/tipo-periodo.component";
import { TipoPolizaComponent } from "./tipo-poliza/tipo-poliza.component";
import { TipoVinculacionComponent } from "./tipo-vinculacion/tipo-vinculacion.component";
import { UnidadesEjecutorasComponent } from "./unidades-ejecutoras/unidades-ejecutoras.component";
import { UnidadesResponsablesComponent } from "./unidades-responsables/unidades-responsables.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConacRoutingModule } from "../conac/conac-routing.module";

@NgModule({
    declarations: [
        AgrupacionDocumentoFuenteComponent,
        AgrupacionLineaPolizaComponent,
        AgrupacionPolizaComponent,
        EstatusPolizaComponent,
        EstructuraCuentasComponent,
        GrupoUnidadesResponsablesComponent,
        MomentoContableComponent,
        OrigenPolizaComponent,
        SubtipoDocumentoInternoComponent,
        TipoDocumentoFuenteComponent,
        TipoDocumentoInternoComponent,
        TipoPeriodoComponent,
        TipoPolizaComponent,
        TipoVinculacionComponent,
        UnidadesEjecutorasComponent,
        UnidadesResponsablesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ConacRoutingModule
    ]
})

export class ApoyoModule { }