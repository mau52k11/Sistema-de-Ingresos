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

  constructor(private router: Router){}

  onMenuItemSelected(item: MenuItem) {
    this.selectedSubmenus = item.children ?? null;
    this.menuSeleccionado = item;
    if (item.route) {
      this.router.navigate([item.route]);
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
