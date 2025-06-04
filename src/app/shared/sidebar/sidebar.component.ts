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
      icon: 'fas fa-home fa-2x',
      label: 'Dashboard',
    },
    {
      icon: 'fa-solid fa-scale-balanced fa-2x',
      label: 'Administración',
      isOpen: false,
      children: [
        { icon: 'fas fa-user fa-2x', label: 'Cuentas contables' },
        { icon: 'fas fa-lock fa-2x', label: 'Ley de ingresos' },
      ]
    },
    {
      icon: 'fa-solid fa-arrow-up-right-dots fa-2x',
      label: 'Censo',
      isOpen: false,
      children: [
        { icon: 'fas fa-user  fa-2x', label: 'Cuestionarios' },
        { icon: 'fas fa-lock fa-2x', label: 'Formularios' },
        { icon: 'fas fa-user fa-2x', label: 'Comercios Censados'}
      ]
    },
    {
      icon: 'fas fa-envelope fa-2x',
      label: 'Reportería'
    },
    {
      icon: 'fa-solid fa-money-bill-transfer fa-2x',
      label: 'Ingresos'
    },
    {
      icon: 'fa-solid fa-shield fa-2x',
      label: 'Seguridad'
    },
    {
      icon: 'fa-solid fa-headset fa-2x',
      label: 'Soporte'
    },
    {
      icon: 'fa-solid fa-calculator fa-2x',
      label: 'Contabilidad'
    }, 
    {
      icon: 'fa-solid fa-gear fa-2x',
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
