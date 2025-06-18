import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CatalogoRoutingModule } from "./catalogo-routing.module";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

@NgModule({
    declarations: [
        LayoutPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogoRoutingModule
    ]
})

export class CatalogoModule{}