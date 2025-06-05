import { Component } from '@angular/core';
import { MenuItem } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  selectedSubmenus: MenuItem['children'] | null = null;

  onMenuItemSelected(item: MenuItem) {
    this.selectedSubmenus = item.children ?? null;
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
