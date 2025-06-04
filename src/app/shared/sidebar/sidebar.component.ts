import { Component, EventEmitter, Input, Output } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;

  menuItems: MenuItem[] = [
    {
      icon: 'fas fa-home custom-icon',
      label: 'Dashboard',
    },
    {
      icon: 'fa-solid fa-scale-balanced custom-icon',
      label: 'Administración',
      isOpen: false,
      children: [
        { icon: 'fas fa-user custom-icon', label: 'Cuentas contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Ley de ingresos' },
      ]
    },
    {
      icon: 'fa-solid fa-arrow-up-right-dots custom-icon',
      label: 'Censo',
      isOpen: false,
      children: [
        { icon: 'fas fa-user  custom-icon', label: 'Cuestionarios' },
        { icon: 'fas fa-lock custom-icon', label: 'Formularios' },
        { icon: 'fas fa-user custom-icon', label: 'Comercios Censados'}
      ]
    },
    {
      icon: 'fas fa-envelope custom-icon',
      label: 'Reportería'
    },
    {
      icon: 'fa-solid fa-money-bill-transfer custom-icon',
      label: 'Ingresos'
    },
    {
      icon: 'fa-solid fa-shield custom-icon',
      label: 'Seguridad'
    },
    {
      icon: 'fa-solid fa-headset custom-icon',
      label: 'Soporte'
    },
    {
      icon: 'fa-solid fa-calculator custom-icon',
      label: 'Contabilidad'
    }, 
    {
      icon: 'fa-solid fa-gear custom-icon',
      label: 'Gestión de Temas'
    }
  ];

  toggleMenuItem(item: MenuItem) {
    console.log('Clic en:', item.label);
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

}
