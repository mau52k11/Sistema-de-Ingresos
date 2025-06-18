import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ConsultasCuentasContablesComponent } from "./consultas-cuentas-contables/consultas-cuentas-contables.component";
import { CuentasContablesComponent } from "./cuentas-contables/cuentas-contables.component";
import { PlanCuentaComponent } from "./plan-cuenta/plan-cuenta.component";

const routes: Routes = [
    { path: 'plan-de-cuentas', component: PlanCuentaComponent },
    { path: 'catalogo-de-cuentas-contables', component: CuentasContablesComponent },
    { path: 'consultas-de-cuentas-contables', component: ConsultasCuentasContablesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConacRoutingModule { }