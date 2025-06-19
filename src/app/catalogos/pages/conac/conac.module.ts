import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConacRoutingModule } from "./conac-routing.module";
import { PlanCuentaComponent } from "./plan-cuenta/plan-cuenta.component";
import { CuentasContablesComponent } from "./cuentas-contables/cuentas-contables.component";
import { ConsultasCuentasContablesComponent } from "./consultas-cuentas-contables/consultas-cuentas-contables.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [
        PlanCuentaComponent,
        CuentasContablesComponent,
        ConsultasCuentasContablesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        ConacRoutingModule
    ]
})

export class CatalogoModule{}