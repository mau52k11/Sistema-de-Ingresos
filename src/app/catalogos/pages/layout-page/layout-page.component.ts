import { Component } from '@angular/core';
import { MenuItem } from '../../../shared/sidebar/sidebar.component';
import { Router } from '@angular/router';
export interface ModuleItem {
  code: string;
  name: string;
  color: string;
  route?: string;
}
@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  selectedSubmenus: MenuItem['children'] | null = null;
  mostrarOpciones: boolean = false;
  showModulesGrid: boolean = false;

  constructor(private router: Router) { }

  onMenuItemSelected(item: MenuItem) {
  this.menuSeleccionado = item;
  this.selectedSubmenus = item.children || null;

  if (item.route === 'clasificaciones') {
    this.mostrarOpciones = true;
    this.router.navigate(['/clasificaciones']);
  } else if (item.route === 'dashboard') {
    this.mostrarOpciones = false;
    this.router.navigate(['/dashboard']);
  } else if (item.route) {
    this.mostrarOpciones = false;
    this.router.navigate([item.route]);
  } else {
    this.mostrarOpciones = true;
  }
}


  menuSeleccionado: MenuItem | null = null;

  seleccionarMenu(menu: MenuItem) {
    this.menuSeleccionado = menu;
    console.log('navegando a :', this.menuSeleccionado.route);
    this.router.navigate([this.menuSeleccionado.route]);
  }

  onShowModulesGrid(): void {
    this.showModulesGrid = true;
  }

  onModuleSelected(module: ModuleItem): void {
    console.log('Módulo seleccionado:', module);

    if (module.route) {
      this.router.navigate([module.route]);
    }
    this.showModulesGrid = false;
  }

  onCloseModulesGrid(): void {
    this.showModulesGrid = false;
  }
  isSidebarCollapsed = true;
  private collapseTimeout: any;

  onMouseEnterSidebar() {
    clearTimeout(this.collapseTimeout);
    this.isSidebarCollapsed = false;
  }

  onMouseLeaveSidebar() {
    this.collapseTimeout = setTimeout(() => {
      this.isSidebarCollapsed = true;
    }, 300);
  }

}
