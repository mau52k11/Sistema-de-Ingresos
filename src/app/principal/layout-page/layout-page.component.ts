import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
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
