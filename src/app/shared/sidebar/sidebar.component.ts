import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() menuSelected = new EventEmitter<MenuItem>();

  menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: '',
    },
    {
      icon: 'balanced',
      label: 'Administración',
    },
    {
      icon: 'book',
      label: 'Catálogos',
      children: [
        { icon: 'user', label: 'Agrupador de cuenta contable', route: '/catalogo/agrupador-cuentas-contables' },
        { icon: 'user-lock', label: 'Bancos', route: '/catalogo/bancos' },
        { icon: 'fas fa-lock custom-icon', label: 'Catálogo de documentación', route: '/catalogo/documentacion' },
        { icon: 'fas fa-lock custom-icon', label: 'Clasificaciones de vehículos', route: '/catalogo/clasficaciones-vehiculos' },
        { icon: 'fas fa-lock custom-icon', label: 'Cuentas contables', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Cuentas de registro', route: '/catalogo/cuentas-registro' },
        { icon: 'fas fa-lock custom-icon', label: 'Estado civil', route: '/catalogo/estados-civiles' },
        { icon: 'fas fa-lock custom-icon', label: 'Estimulos', route: '/catalogo/estimulos' },
        { icon: 'fas fa-lock custom-icon', label: 'Etiquetas para plantillas', route: '/catalogo/etiquetas-plantillas' },
        { icon: 'fas fa-lock custom-icon', label: 'Giros comerciales', route: '/catalogo/giros-comerciales' },
        { icon: 'fas fa-lock custom-icon', label: 'Giros de mercados', route: '/catalogo/' },
        { icon: 'fas fa-lock custom-icon', label: 'Giros de zofemat', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Motivo de cambio de propietario', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Tablas para plantillas', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Tipo de asentamiento', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Tipo de documentación', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Tipo de vialidad', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Ubicaciones', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Unidades de cobro', route: '/catalogo/cuentas-contables' },
        { icon: 'fas fa-lock custom-icon', label: 'Unidades de medida', route: '/catalogo/cuentas-contables' },
      ],
    },
    {
      icon: 'category',
      label: 'Clasificaciones',
    },
    {
      icon: 'language',
      label: 'General',
    },
    {
      icon: 'apartment',
      label: 'Municipio',
    },
    {
      icon: 'assignment_id',
      label: 'Padrones',
    },
    {
      icon: 'trending_up',
      label: 'Censo',
    },
    {
      icon: 'description',
      label: 'Reportería'
    },
    {
      icon: 'paid',
      label: 'Ingresos'
    },
    {
      icon: 'security',
      label: 'Seguridad'
    },
    {
      icon: 'support_agent',
      label: 'Soporte'
    },
    {
      icon: 'receipt_long',
      label: 'Contabilidad'
    },
    {
      icon: 'tune',
      label: 'Gestión de Temas'
    }
  ];

  onMenuClick(item: MenuItem) {
    this.menuSelected.emit(item);
  }
  // @Input() isSidebarCollapsed = false;

  // menuItems: MenuItem[] = [
  //   {
  //     icon: 'fas fa-home custom-icon',
  //     label: 'Dashboard',
  //   },
  //   {
  //     icon: 'fa-solid fa-scale-balanced custom-icon',
  //     label: 'Administración',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user custom-icon', label: 'Cuentas contables' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Ley de ingresos' },
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-book custom-icon',
  //     label: 'Catálogos',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user custom-icon', label: 'Agrupador de cuenta contable' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Bancos' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Catálogo de documentación' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Clasificaciones de vehículos' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Cuentas contables' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Cuentas de registro' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Estado civil' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Estimulos' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Etiquetas para plantillas' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Giros comerciales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Giros de mercados' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Giros de zofemat' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Motivo de cambio de propietario' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tablas para plantillas' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipo de asentamiento' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipo de documentación' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipo de vialidad' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Ubicaciones' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Unidades de cobro' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Unidades de medida' },
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-layer-group custom-icon',
  //     label: 'Clasificaciones',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user custom-icon', label: 'Tipos de concepto adicional' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de contacto' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de cuenta contable' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de extracción de zofemat' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de padrón' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de pago' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de pago descuento' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de parámetros' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de ubicación' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de vehículo' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Usos de suelo de zofemat' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Usos de vehículo' },
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-globe custom-icon',
  //     label: 'General',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user custom-icon', label: 'Conceptos adicionales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Descuentos especiales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Organigrama' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Parámetros generales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Plantillas' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Usuarios por área' },
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-hotel custom-icon',
  //     label: 'Municipio',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user custom-icon', label: 'Catálogos municipales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Configuración de caja' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Configuración de comercio' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Configuración de giros de mercados' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Configuración DESOTUR' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Configuración de trámites' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Datos generales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Ley de ingresos' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Organizaciones de mercado' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Reglamento de tránsito' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Versiones de ley' },
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-users-rectangle custom-icon',
  //     label: 'Padrones',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user custom-icon', label: 'Catálogos de mercados' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Catálogos de notarios' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Catálogo de oficiales' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Catálogo de panteones' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Catálogo de régimen' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Clases de predio' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Factores de actualización' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Periodicidad y cuentas' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Recargos de adeudo' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tabla de valores' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tabla de valores de zofemat' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tarifas de adeudo' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de categoría' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tipos de construcción' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Tabla de predio' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Valores de construcción' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Valores de extracción de Zofemat' },
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-arrow-up-right-dots custom-icon',
  //     label: 'Censo',
  //     isOpen: false,
  //     children: [
  //       { icon: 'fas fa-user  custom-icon', label: 'Cuestionarios' },
  //       { icon: 'fas fa-lock custom-icon', label: 'Formularios' },
  //       { icon: 'fas fa-user custom-icon', label: 'Comercios Censados'}
  //     ]
  //   },
  //   {
  //     icon: 'fas fa-envelope custom-icon',
  //     label: 'Reportería'
  //   },
  //   {
  //     icon: 'fa-solid fa-money-bill-transfer custom-icon',
  //     label: 'Ingresos'
  //   },
  //   {
  //     icon: 'fa-solid fa-shield custom-icon',
  //     label: 'Seguridad'
  //   },
  //   {
  //     icon: 'fa-solid fa-headset custom-icon',
  //     label: 'Soporte'
  //   },
  //   {
  //     icon: 'fa-solid fa-calculator custom-icon',
  //     label: 'Contabilidad'
  //   }, 
  //   {
  //     icon: 'fa-solid fa-gear custom-icon',
  //     label: 'Gestión de Temas'
  //   }
  // ];

  // toggleMenuItem(item: MenuItem) {
  //   console.log('Clic en:', item.label);
  //   if (!this.isSidebarCollapsed && item.children) {
  //     item.isOpen = !item.isOpen;
  //   }
  // }

}
