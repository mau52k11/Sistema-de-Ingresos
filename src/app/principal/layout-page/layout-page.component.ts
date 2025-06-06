import { Component } from '@angular/core';
import { MenuItem } from '../../shared/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  selectedSubmenus: MenuItem['children'] | null = null;
  mostrarOpciones: boolean = false;

  constructor(private router: Router){}

  onMenuItemSelected(item: MenuItem) {
  this.menuSeleccionado = item;
  this.selectedSubmenus = item.children || null;

  // Si es dashboard, navegamos y ocultamos Opciones
  if (item.route === '/dashboard') {
    this.mostrarOpciones = false;
    this.router.navigate([item.route]);
  } else {
    // Para otros, solo mostramos opciones y no navegamos
    this.mostrarOpciones = true;
  }
  }

  menuSeleccionado: MenuItem | null = null;

seleccionarMenu(menu: MenuItem) {
  this.menuSeleccionado = menu;
}
  // isSidebarCollapsed = true;
  // private collapseTimeout: any;

  // onMouseEnterSidebar() {
  //   clearTimeout(this.collapseTimeout);
  //   this.isSidebarCollapsed = false;
  // }

  // onMouseLeaveSidebar() {
  //   this.collapseTimeout = setTimeout(() => {
  //     this.isSidebarCollapsed = true;
  //   }, 300);
  // }
}
