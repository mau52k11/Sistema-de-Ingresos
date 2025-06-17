import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  route?: string;
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
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() menuSelected = new EventEmitter<MenuItem>();
  @Output() logoClicked = new EventEmitter<void>();

  constructor(private router: Router) { }

  menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      icon: 'assured_workload',
      label: 'Administrador Contable del Ingreso',
      children: [
        {
          icon: 'fas fa-user custom-icon', label: 'Clasificadores y Catálogos', route: '/admin/cuentas-contables',
          children: [
            {
              icon: 'fas fa-folder-open custom-icon', label: 'Catálogos Contables', route: '/catalogo/agrupador-cuentas-contables',
              children: [
                {
                  icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Catálogo CONAC',
                  children: [
                    { icon: 'fas fa-folder-open custom-icon', label: 'Plan de cuenta', route: '/catalogo/agrupador-cuentas-contables' },
                    { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Catálogo de Cuentas Contables', route: '/catalogo/cuentas-contables' },
                    { icon: 'fas fa-clipboard-list custom-icon', label: 'Consulta de Catálogo de Cuentas Contables', route: '/catalogo/cuentas-registro' }
                  ]
                }
              ]
            },
            {
              icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Catálogos de Apoyo', route: '/catalogo/cuentas-contables',
              children: [
                { icon: 'fas fa-folder-open custom-icon', label: 'Estructura de Cuentas', route: '/catalogo/agrupador-cuentas-contables' },
                { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Tipo de Periodo', route: '/catalogo/cuentas-contables' },
                { icon: 'fas fa-clipboard-list custom-icon', label: 'Tipo de Póliza', route: '/catalogo/cuentas-registro' },
                { icon: 'fas fa-folder-open custom-icon', label: 'Origen de Póliza', route: '/catalogo/agrupador-cuentas-contables' },
                { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Estatus de Póliza', route: '/catalogo/cuentas-contables' },
                { icon: 'fas fa-clipboard-list custom-icon', label: 'Momento Contable', route: '/catalogo/cuentas-registro' },
                { icon: 'fas fa-folder-open custom-icon', label: 'Tipo de Vinculación', route: '/catalogo/agrupador-cuentas-contables' },
                { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Agrupación de Póliza', route: '/catalogo/cuentas-contables' },
                { icon: 'fas fa-clipboard-list custom-icon', label: 'Tipo de Documento Fuente', route: '/catalogo/cuentas-registro' },
                { icon: 'fas fa-folder-open custom-icon', label: 'Grupo de Unidades Responsables', route: '/catalogo/agrupador-cuentas-contables' },
                { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Unidades Responsables', route: '/catalogo/cuentas-contables' },
                { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Unidades Ejecutoras', route: '/catalogo/cuentas-contables' },
                { icon: 'fas fa-clipboard-list custom-icon', label: 'Tipo de Documento Interno', route: '/catalogo/cuentas-registro' },
                { icon: 'fas fa-folder-open custom-icon', label: 'Subtipo de Documento Interno', route: '/catalogo/agrupador-cuentas-contables' },
                { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Agrupación del Documento Fuente', route: '/catalogo/cuentas-contables' },
                { icon: 'fas fa-clipboard-list custom-icon', label: 'Agrupación de Línea de Póliza', route: '/catalogo/cuentas-registro' }
              ]
            },
            {
              icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Alta de Cuentas Bancarias', route: '/catalogo/cuentas-contables',
            },
            {
              icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Padrón Contable', route: '/catalogo/cuentas-contables',
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
            { icon: 'fas fa-user custom-icon', label: 'Catálogo de Niveles', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Registrar Claves de Ingresos', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-lock custom-icon', label: 'Autorizar Claves de Ingresos', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-lock custom-icon', label: 'Modificar Claves de Ingresos', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-lock custom-icon', label: 'Consultar Claves de Ingresos', route: '/admin/ley-ingresos' }
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
          icon: 'folder',
          // children: [
          //   { icon: 'fas fa-user custom-icon', label: 'Ingresos corrientes', route: '/home/ingresos-corrientes' },
          //   { icon: 'fas fa-lock custom-icon', label: 'Ingresos de capital', route: '/admin/ley-ingresos' },
          //   { icon: 'fas fa-lock custom-icon', label: 'Ingresos Tributarios', route: '/admin/ley-ingresos' },
          //   { icon: 'fas fa-lock custom-icon', label: 'Ingresos no Tributarios', route: '/admin/ley-ingresos' }
          // ]
        },
      ]
    },
    {
      icon: 'receipt_long',
      label: 'Pólizas Contables',
      children: [
        {
          label: 'Registrar y Consultar Pólizas Contables',
          icon: 'book',
          // children: [
          //   {
          //     label: 'Cuentas',
          //     icon: 'account_balance',
          //     children: [
          //       { icon: 'fas fa-folder-open custom-icon', label: 'Agrupador de cuenta contable', route: '/catalogo/agrupador-cuentas-contables' },
          //       { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Cuentas contables', route: '/catalogo/cuentas-contables' },
          //       { icon: 'fas fa-clipboard-list custom-icon', label: 'Cuentas de registro', route: '/catalogo/cuentas-registro' }
          //     ]
          //   },
          //   {
          //     label: 'Finanzas',
          //     icon: 'attach_money',
          //     children: [
          //       { icon: 'fas fa-university custom-icon', label: 'Bancos', route: '/catalogo/bancos' },
          //       { icon: 'fas fa-hand-holding-usd custom-icon', label: 'Estimulos', route: '/catalogo/estimulos' },
          //       { icon: 'fas fa-dollar-sign custom-icon', label: 'Unidades de cobro', route: '/catalogo/unidades-cobro' },
          //       { icon: 'fas fa-balance-scale custom-icon', label: 'Unidades de medida', route: '/catalogo/unidades-medida' }
          //     ]
          //   }
          // ]
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
            { icon: 'fas fa-user custom-icon', label: 'Catálogo de Anuncios', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Generación de la Cédula de Inscripción o Actualización', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Bajo Comercio', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Giros Adicionales', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Alta/Agregar Comercio; Modificación/Editar Comercio', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Licencia de Registro o Revalidación', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Generación de Objetos Cuenta', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Cuenta Predial', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Agrupador de Conceptos Adicionales', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Reimpresión de estado de cuenta', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Busqueda Integral', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Cambio de Domicilio', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Cambio de Denominación', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Reposición de Cédula de Funcionamiento', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-user custom-icon', label: 'Horas Extraordinarias', route: '/admin/cuentas-contables' },
          ]
        },
        {
          label: 'Alta/Agregar; Modificación Comercio',
          icon: 'folder',
          children: [
            { icon: 'fas fa-user custom-icon', label: 'Búsqueda Integral', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Catálogos de Panteones', route: '/admin/ley-ingresos' },
            { icon: 'fas fa-lock custom-icon', label: 'Catálogo de Observaciones', route: '/admin/ley-ingresos' }
          ]
        },
        {
          label: 'Mercados',
          icon: 'folder',
          children: [
            { icon: 'fas fa-user custom-icon', label: 'Búsqueda Integral', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-user custom-icon', label: 'Cambio de Titular', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-user custom-icon', label: 'Catálogo de Mercados', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-user custom-icon', label: 'Expediente de los Registros', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-user custom-icon', label: 'Zonas de Mercado', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-user custom-icon', label: 'Plaza de Mercado', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-user custom-icon', label: 'Giros de Mercado', route: '/admin/cuentas-contables' },
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
          icon: 'fas fa-clipboard-list custom-icon',
          // children: [
          //   { icon: 'fas fa-poll custom-icon', label: 'Cuestionarios', route: '/censo/cuestionarios' },
          //   { icon: 'fas fa-file-alt custom-icon', label: 'Formularios', route: '/censo/formularios' }
          // ]
        },
        {
          label: 'Roles',
          icon: 'fas fa-clipboard-list custom-icon',
          // children: [
          //   { icon: 'fas fa-poll custom-icon', label: 'Cuestionarios', route: '/censo/cuestionarios' },
          //   { icon: 'fas fa-file-alt custom-icon', label: 'Formularios', route: '/censo/formularios' }
          // ]
        },
        {
          label: 'Opciones',
          icon: 'fas fa-clipboard-list custom-icon',
          // children: [
          //   { icon: 'fas fa-poll custom-icon', label: 'Cuestionarios', route: '/censo/cuestionarios' },
          //   { icon: 'fas fa-file-alt custom-icon', label: 'Formularios', route: '/censo/formularios' }
          // ]
        },
        {
          label: 'Bitacora',
          icon: 'fas fa-clipboard-list custom-icon',
          children: [
            { icon: 'fas fa-poll custom-icon', label: 'Movimientos realizados en cada padrón por usuarios', route: '/censo/cuestionarios' },
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
          icon: 'fas fa-clipboard-list custom-icon',
          // children: [
          //   { icon: 'fas fa-poll custom-icon', label: 'Cuestionarios', route: '/censo/cuestionarios' },
          //   { icon: 'fas fa-file-alt custom-icon', label: 'Formularios', route: '/censo/formularios' }
          // ]
        },
        {
          label: 'Reporte por Rubros de Ingreso',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reporte de Ingreso por Áreas',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reportes de Caja',
          icon: 'fas fa-store custom-icon',
          children: [
            { icon: 'fas fa-store-alt custom-icon', label: 'Reporte de Caja por Cuenta Contable', route: '/censo/comercios-censados' },
            { icon: 'fas fa-store-alt custom-icon', label: 'Reporte de Caja por Detalle de Pagos', route: '/censo/comercios-censados' }
          ]
        },
        {
          label: 'Reporte de Descuentos Otorgados',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reporte de Facturas',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reporte de Carteras Vencidad',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reporte de Usuarios',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reporte Específico',
          icon: 'fas fa-store custom-icon',
        },
        {
          label: 'Reporte de Órdenes Generadas de Traslado de Dominio',
          icon: 'fas fa-store custom-icon',
        },
      ]
    },
    // {
    //   icon: 'category',
    //   label: 'Categorías y Catálogos',
    //   route: '/clasificaciones'
    // },
    {
      icon: 'travel_explore',
      label: 'Portal Público'
    }
  ];

  onMenuClick(item: MenuItem) {
    this.menuSelected.emit(item);

    if (item.route) {
      console.log('Redirigiendo a:', item.route);
      this.router.navigate([item.route]);
    }
  }

  onLogoClick(): void {
    this.logoClicked.emit();
  }

}
