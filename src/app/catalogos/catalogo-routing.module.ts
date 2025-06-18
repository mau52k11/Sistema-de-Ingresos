import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

const routes: Routes = [
    { path: '', component: LayoutPageComponent,
        children: [
            { path: 'conac', loadChildren: ()=> import('./pages/conac/conac.module').then(m=>m.CatalogoModule) },
            { path: 'apoyo', loadChildren: ()=> import('./pages/apoyo/apoyo.module').then(m=>m.ApoyoModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CatalogoRoutingModule {}