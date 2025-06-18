import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  route?: string;
  isActive?: boolean;
}

export interface ModuleItem {
  code: string;
  name: string;
  color: string;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-in', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class SidebarComponent {

  @Output() menuSelected = new EventEmitter<MenuItem>();
  @Output() logoClicked = new EventEmitter<void>();
  @Input() isSidebarCollapsed: boolean = true;

  constructor(private router: Router) { }

  menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: '/home/dashboard'
    },
    {
      icon: 'assured_workload',
      label: 'Administrador Contable del Ingreso',
      children: [
        {
          icon: 'fas fa-user custom-icon', label: 'Clasificadores y Catálogos', route: '/admin/cuentas-contables',
          children: [
            {
              icon: '', label: 'Catálogos Contables',
              children: [
                {
                  icon: '', label: 'Catálogo CONAC',
                  children: [
                    { icon: '', label: 'Plan de cuenta', route: '/catalogos/conac/plan-de-cuentas' },
                    { icon: '', label: 'Catálogo de Cuentas Contables', route: '/catalogos/conac/catalogo-de-cuentas-contables' },
                    { icon: '', label: 'Consulta de Catálogo de Cuentas Contables', route: '/catalogos/conac/consultas-de-cuentas-contables' }
                  ]
                },
                {
                  icon: '', label: 'Catálogos de Apoyo', route: '/catalogo/cuentas-contables',
                  children: [
                    { icon: '', label: 'Estructura de Cuentas', route: '/catalogo/agrupador-cuentas-contables' },
                    { icon: '', label: 'Tipo de Periodo', route: '/catalogo/cuentas-contables' },
                    { icon: '', label: 'Tipo de Póliza', route: '/catalogo/cuentas-registro' },
                    { icon: '', label: 'Origen de Póliza', route: '/catalogo/agrupador-cuentas-contables' },
                    { icon: '', label: 'Estatus de Póliza', route: '/catalogo/cuentas-contables' },
                    { icon: '', label: 'Momento Contable', route: '/catalogo/cuentas-registro' },
                    { icon: '', label: 'Tipo de Vinculación', route: '/catalogo/agrupador-cuentas-contables' },
                    { icon: '', label: 'Agrupación de Póliza', route: '/catalogo/cuentas-contables' },
                    { icon: '', label: 'Tipo de Documento Fuente', route: '/catalogo/cuentas-registro' },
                    { icon: '', label: 'Grupo de Unidades Responsables', route: '/catalogo/agrupador-cuentas-contables' },
                    { icon: '', label: 'Unidades Responsables', route: '/catalogo/cuentas-contables' },
                    { icon: '', label: 'Unidades Ejecutoras', route: '/catalogo/cuentas-contables' },
                    { icon: '', label: 'Tipo de Documento Interno', route: '/catalogo/cuentas-registro' },
                    { icon: '', label: 'Subtipo de Documento Interno', route: '/catalogo/agrupador-cuentas-contables' },
                    { icon: '', label: 'Agrupación del Documento Fuente', route: '/catalogo/cuentas-contables' },
                    { icon: '', label: 'Agrupación de Línea de Póliza', route: '/catalogo/cuentas-registro' }
                  ]
                },
              ]
            },
            {
              icon: '', label: 'Alta de Cuentas Bancarias', route: '/catalogo/cuentas-contables',
            },
            {
              icon: '', label: 'Padrón Contable', route: '/catalogo/cuentas-contables',
            },
          ]

        },
      ],

    },
    {
      label: 'Configuración de Ingresos',
      icon: 'folder',
      children: [
        {
          icon: 'fas fa-user custom-icon',
          label: 'Clave de Ingresos',
          children: [
            { icon: '', label: 'Catálogo de Niveles', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Registrar Claves de Ingresos', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Autorizar Claves de Ingresos', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Modificar Claves de Ingresos', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Consultar Claves de Ingresos', route: '/admin/ley-ingresos' }
          ]
        },
      ]
    },
    {
      icon: 'event_available',
      label: 'Periodo Contables',
      children: [
        {
          label: 'Administrar periodos contables',
          icon: 'folder'
        },
      ]
    },
    {
      icon: 'receipt_long',
      label: 'Pólizas Contables',
      children: [
        {
          label: 'Registrar y Consultar Pólizas Contables',
          icon: '',
        },
        {
          label: 'Consultar Pólizas Contables',
          icon: ''
        }
      ]
    },
    {
      icon: 'contact_mail',
      label: 'Padrones',
      children: [
        {
          label: 'Comercios',
          icon: 'folder',
          children: [
            { icon: '', label: 'Catálogo de Anuncios', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Generación de la Cédula de Inscripción o Actualización', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Bajo Comercio', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Giros Adicionales', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Alta/Agregar Comercio; Modificación/Editar Comercio', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Licencia de Registro o Revalidación', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Generación de Objetos Cuenta', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Cuenta Predial', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Agrupador de Conceptos Adicionales', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Reimpresión de estado de cuenta', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Busqueda Integral', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Cambio de Domicilio', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Cambio de Denominación', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Reposición de Cédula de Funcionamiento', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Horas Extraordinarias', route: '/admin/cuentas-contables' },
          ]
        },
        {
          label: 'Alta/Agregar; Modificación Comercio',
          icon: 'folder',
          children: [
            { icon: '', label: 'Búsqueda Integral', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Catálogos de Panteones', route: '/admin/ley-ingresos' },
            { icon: '', label: 'Catálogo de Observaciones', route: '/admin/ley-ingresos' }
          ]
        },
        {
          label: 'Mercados',
          icon: 'folder',
          children: [
            { icon: '', label: 'Búsqueda Integral', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Cambio de Titular', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Catálogo de Mercados', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Expediente de los Registros', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Zonas de Mercado', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Plaza de Mercado', route: '/admin/cuentas-contables' },
            { icon: '', label: 'Giros de Mercado', route: '/admin/cuentas-contables' },
          ]
        },
        {
          label: 'Agua Potable',
          icon: 'folder',
        },
      ]
    },
    {
      icon: 'admin_panel_settings',
      label: 'Seguridad',
      children: [
        {
          label: 'Usuarios',
          icon: '',
        },
        {
          label: 'Roles',
          icon: '',
        },
        {
          label: 'Opciones',
          icon: '',
        },
        {
          label: 'Bitacora',
          icon: '',
          children: [
            { icon: '', label: 'Movimientos realizados en cada padrón por usuarios', route: '/censo/cuestionarios' },
          ]
        },

      ]
    },
    {
      icon: 'assignment_late',
      label: 'Reportería',
      children: [
        {
          label: 'Reporte por Fuente de Ingresos',
          icon: '',
        },
        {
          label: 'Reporte por Rubros de Ingreso',
          icon: '',
        },
        {
          label: 'Reporte de Ingreso por Áreas',
          icon: '',
        },
        {
          label: 'Reportes de Caja',
          icon: '',
          children: [
            { icon: '', label: 'Reporte de Caja por Cuenta Contable', route: '/censo/comercios-censados' },
            { icon: '', label: 'Reporte de Caja por Detalle de Pagos', route: '/censo/comercios-censados' }
          ]
        },
        {
          label: 'Reporte de Descuentos Otorgados',
          icon: '',
        },
        {
          label: 'Reporte de Facturas',
          icon: '',
        },
        {
          label: 'Reporte de Carteras Vencidad',
          icon: '',
        },
        {
          label: 'Reporte de Usuarios',
          icon: '',
        },
        {
          label: 'Reporte Específico',
          icon: '',
        },
        {
          label: 'Reporte de Órdenes Generadas de Traslado de Dominio',
          icon: '',
        },
      ]
    },
    {
      icon: 'travel_explore',
      label: 'Portal Público'
    }
  ];

  activeItem: MenuItem | null = null;

  clearActiveFlags(items: MenuItem[]) {
    for (let item of items) {
      item.isActive = false;
      if (item.children) {
        this.clearActiveFlags(item.children);
      }
    }
  }

  onMenuClick(item: MenuItem, event?: MouseEvent) {
    const isLeaf = !item.children || item.children.length === 0;
    event?.stopPropagation();
    this.clearActiveFlags(this.menuItems);
    if (isLeaf) {
      item.isActive = true;
      this.activeItem = item;

      if (item.route) {
        this.navigateToRoute(item);
      }
    } else {
      item.isOpen = !item.isOpen;
    }
  }

  private toggleMenuItem(item: MenuItem): void {
    item.isOpen = !item.isOpen;
  }

  private closeOtherMenuItems(currentItem: MenuItem): void {
    this.closeMenuItemsRecursive(this.menuItems, currentItem);
  }

  private closeMenuItemsRecursive(items: MenuItem[], currentItem: MenuItem): void {
    items.forEach(item => {
      if (item !== currentItem && item.isOpen) {
        item.isOpen = false;
      }
      if (item.children) {
        this.closeMenuItemsRecursive(item.children, currentItem);
      }
    });
  }

  private navigateToRoute(item: MenuItem): void {
    if (item.route) {
      this.router.navigate([item.route]);

      if (window.innerWidth <= 768) {
        this.onLogoClick();
      }
    }
  }

  isMenuItemActive(item: MenuItem): boolean {
    if (!item.route) return false;
    return this.router.url === item.route;
  }

  private initializeMenuState(): void {
    this.expandActiveMenuPath(this.menuItems);
  }

  private expandActiveMenuPath(items: MenuItem[]): boolean {
    for (const item of items) {
      if (item.route === this.router.url) {
        return true;
      }

      if (item.children && this.expandActiveMenuPath(item.children)) {
        item.isOpen = true;
        return true;
      }
    }
    return false;
  }

  setActive(item: MenuItem, items: MenuItem[]) {
    for (let i of items) {
      i.isActive = false;
      if (i.children) {
        this.setActive(item, i.children);
      }
    }
  }

  onLogoClick(): void {
    this.logoClicked.emit();
  }

  toggleItem(item: MenuItem) {
    item.isOpen = !item.isOpen;
  }
}
