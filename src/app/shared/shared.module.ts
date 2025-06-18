import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';
import { OpcionesHeaderComponent } from './opciones-header/opciones-header.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ClasificacionesComponent,
    OpcionesHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Importar RouterModule
    MatIconModule,
    MatTooltipModule,
    MatIcon
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    MatIconModule,
    MatIcon,
    ClasificacionesComponent,
    OpcionesHeaderComponent
  ]
})
export class SharedModule { }
