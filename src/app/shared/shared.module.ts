import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
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
    MatIcon
  ]
})
export class SharedModule { }
