import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      icon: 'balanced',
      label: 'Administración',
      children: [
        {
          label: 'Contabilidad',
          icon: 'folder',
          children: [
            { icon: 'fas fa-user custom-icon', label: 'Cuentas contables', route: '/admin/cuentas-contables' },
            { icon: 'fas fa-lock custom-icon', label: 'Ley de ingresos', route: '/admin/ley-ingresos' }
          ]
        }
      ]
    },
    {
      icon: 'book',
      label: 'Catálogos',
      children: [
        {
          label: 'Cuentas',
          icon: 'account_balance',
          children: [
            { icon: 'fas fa-folder-open custom-icon', label: 'Agrupador de cuenta contable', route: '/catalogo/agrupador-cuentas-contables' },
            { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Cuentas contables', route: '/catalogo/cuentas-contables' },
            { icon: 'fas fa-clipboard-list custom-icon', label: 'Cuentas de registro', route: '/catalogo/cuentas-registro' }
          ]
        },
        {
          label: 'Finanzas',
          icon: 'attach_money',
          children: [
            { icon: 'fas fa-university custom-icon', label: 'Bancos', route: '/catalogo/bancos' },
            { icon: 'fas fa-hand-holding-usd custom-icon', label: 'Estimulos', route: '/catalogo/estimulos' },
            { icon: 'fas fa-dollar-sign custom-icon', label: 'Unidades de cobro', route: '/catalogo/unidades-cobro' },
            { icon: 'fas fa-balance-scale custom-icon', label: 'Unidades de medida', route: '/catalogo/unidades-medida' }
          ]
        },
        {
          label: 'Documentación',
          icon: 'folder',
          children: [
            { icon: 'fas fa-file-alt custom-icon', label: 'Catálogo de documentación', route: '/catalogo/documentacion' },
            { icon: 'fas fa-file custom-icon', label: 'Tipo de documentación', route: '/catalogo/tipo-documentacion' }
          ]
        },
        {
          label: 'Geografía',
          icon: 'map',
          children: [
            { icon: 'fas fa-map-marker-alt custom-icon', label: 'Ubicaciones', route: '/catalogo/ubicaciones' },
            { icon: 'fas fa-road custom-icon', label: 'Tipo de vialidad', route: '/catalogo/vialidad' },
            { icon: 'fas fa-city custom-icon', label: 'Tipo de asentamiento', route: '/catalogo/asentamiento' }
          ]
        },
        {
          label: 'Plantillas',
          icon: 'description',
          children: [
            { icon: 'fas fa-tags custom-icon', label: 'Etiquetas para plantillas', route: '/catalogo/etiquetas-plantillas' },
            { icon: 'fas fa-table custom-icon', label: 'Tablas para plantillas', route: '/catalogo/tablas-plantillas' }
          ]
        },
        {
          label: 'Comercio',
          icon: 'store',
          children: [
            { icon: 'fas fa-store-alt custom-icon', label: 'Giros comerciales', route: '/catalogo/giros-comerciales' },
            { icon: 'fas fa-store custom-icon', label: 'Giros de mercados', route: '/catalogo/giros-mercados' },
            { icon: 'fas fa-water custom-icon', label: 'Giros de zofemat', route: '/catalogo/giros-zofemat' }
          ]
        },
        {
          label: 'Personas',
          icon: 'people',
          children: [
            { icon: 'fas fa-heart custom-icon', label: 'Estado civil', route: '/catalogo/estados-civiles' }
          ]
        },
        {
          label: 'Vehículos',
          icon: 'directions_car',
          children: [
            { icon: 'fas fa-car-side custom-icon', label: 'Clasificaciones de vehículos', route: '/catalogo/clasficaciones-vehiculos' }
          ]
        },
        {
          label: 'Propiedad',
          icon: 'home_work',
          children: [
            { icon: 'fas fa-exchange-alt custom-icon', label: 'Motivo de cambio de propietario', route: '/catalogo/motivo-cambio-propietario' }
          ]
        }
      ]
    },
    {
      icon: 'category',
      label: 'Clasificaciones',
      children: [
        {
          label: 'Conceptos y Parámetros',
          icon: 'fas fa-sliders-h custom-icon',
          children: [
            { icon: 'fas fa-user custom-icon', label: 'Tipos de concepto adicional', route: '/clasificaciones/tipos-concepto-adicional' },
            { icon: 'fas fa-sliders-h custom-icon', label: 'Tipos de parámetros', route: '/clasificaciones/tipos-parametros' }
          ]
        },
        {
          label: 'Contacto y Cuentas',
          icon: 'fas fa-address-book custom-icon',
          children: [
            { icon: 'fas fa-lock custom-icon', label: 'Tipos de contacto', route: '/clasificaciones/tipos-contacto' },
            { icon: 'fas fa-file-invoice-dollar custom-icon', label: 'Tipos de cuenta contable', route: '/clasificaciones/tipos-cuenta-contable' }
          ]
        },
        {
          label: 'ZOFEMAT',
          icon: 'fas fa-water custom-icon',
          children: [
            { icon: 'fas fa-shuttle-van custom-icon', label: 'Tipos de extracción de zofemat', route: '/clasificaciones/tipos-extraccion-zofemat' },
            { icon: 'fas fa-map-marked-alt custom-icon', label: 'Usos de suelo de zofemat', route: '/clasificaciones/usos-suelo-zofemat' }
          ]
        },
        {
          label: 'Vehículos',
          icon: 'fas fa-car custom-icon',
          children: [
            { icon: 'fas fa-car custom-icon', label: 'Tipos de vehículo', route: '/clasificaciones/tipos-vehiculo' },
            { icon: 'fas fa-car-side custom-icon', label: 'Usos de vehículo', route: '/clasificaciones/usos-vehiculo' }
          ]
        },
        {
          label: 'Pagos y Padrones',
          icon: 'fas fa-money-bill custom-icon',
          children: [
            { icon: 'fas fa-file-invoice custom-icon', label: 'Tipos de padrón', route: '/clasificaciones/tipos-padron' },
            { icon: 'fas fa-credit-card custom-icon', label: 'Tipos de pago', route: '/clasificaciones/tipos-pago' },
            { icon: 'fas fa-percentage custom-icon', label: 'Tipos de pago descuento', route: '/clasificaciones/tipos-pago-descuento' }
          ]
        },
        {
          label: 'Ubicación',
          icon: 'fas fa-map-marker-alt custom-icon',
          children: [
            { icon: 'fas fa-map-pin custom-icon', label: 'Tipos de ubicación', route: '/clasificaciones/tipos-ubicacion' }
          ]
        }
      ]
    },
    {
      icon: 'language',
      label: 'General',
      children: [
        {
          label: 'Configuración',
          icon: 'fas fa-cogs custom-icon',
          children: [
            { icon: 'fas fa-sliders-h custom-icon', label: 'Parámetros generales', route: '/general/parametros-generales' },
            { icon: 'fas fa-file-alt custom-icon', label: 'Plantillas', route: '/general/plantillas' },
          ]
        },
        {
          label: 'Estructura organizacional',
          icon: 'fas fa-sitemap custom-icon',
          children: [
            { icon: 'fas fa-project-diagram custom-icon', label: 'Organigrama', route: '/general/organigrama' },
            { icon: 'fas fa-users custom-icon', label: 'Usuarios por área', route: '/general/usuarios-por-area' }
          ]
        },
        {
          label: 'Beneficios y conceptos',
          icon: 'fas fa-gift custom-icon',
          children: [
            { icon: 'fas fa-plus-square custom-icon', label: 'Conceptos adicionales', route: '/general/conceptos-adicionales' },
            { icon: 'fas fa-percent custom-icon', label: 'Descuentos especiales', route: '/general/descuentos-especiales' }
          ]
        }
      ]
    },
    {
      icon: 'apartment',
      label: 'Municipio',
      children: [
        {
          label: 'Catálogos y datos generales',
          icon: 'fas fa-archive custom-icon',
          children: [
            { icon: 'fas fa-folder-open custom-icon', label: 'Catálogos municipales', route: '/municipio/catalogos-municipales' },
            { icon: 'fas fa-info-circle custom-icon', label: 'Datos generales', route: '/municipio/datos-generales' },
            { icon: 'fas fa-users custom-icon', label: 'Organizaciones de mercado', route: '/municipio/organizaciones-mercado' }
          ]
        },
        {
          label: 'Configuraciones',
          icon: 'fas fa-cogs custom-icon',
          children: [
            { icon: 'fas fa-cash-register custom-icon', label: 'Configuración de caja', route: '/municipio/configuracion-caja' },
            { icon: 'fas fa-store custom-icon', label: 'Configuración de comercio', route: '/municipio/configuracion-comercio' },
            { icon: 'fas fa-warehouse custom-icon', label: 'Configuración de giros de mercados', route: '/municipio/configuracion-giros-mercado' },
            { icon: 'fas fa-tree custom-icon', label: 'Configuración DESOTUR', route: '/municipio/configuracion-desotur' },
            { icon: 'fas fa-tasks custom-icon', label: 'Configuración de trámites', route: '/municipio/configuracion-tramites' }
          ]
        },
        {
          label: 'Legislación municipal',
          icon: 'fas fa-balance-scale custom-icon',
          children: [
            { icon: 'fas fa-book custom-icon', label: 'Ley de ingresos', route: '/municipio/ley-ingresos' },
            { icon: 'fas fa-car-side custom-icon', label: 'Reglamento de tránsito', route: '/municipio/reglamento-transito' },
            { icon: 'fas fa-code-branch custom-icon', label: 'Versiones de ley', route: '/municipio/versiones-ley' }
          ]
        }
      ]
    }
    ,
    {
      icon: 'assignment_ind',
      label: 'Padrones',
      children: [
        {
          label: 'Catálogos administrativos',
          icon: 'fas fa-folder custom-icon',
          children: [
            { icon: 'fas fa-store-alt custom-icon', label: 'Catálogos de mercados', route: '/padrones/catalogos-mercados' },
            { icon: 'fas fa-user-tie custom-icon', label: 'Catálogos de notarios', route: '/padrones/catalogos-notarios' },
            { icon: 'fas fa-user-shield custom-icon', label: 'Catálogo de oficiales', route: '/padrones/catalogo-oficiales' },
            { icon: 'fas fa-church custom-icon', label: 'Catálogo de panteones', route: '/padrones/catalogo-panteones' },
            { icon: 'fas fa-scroll custom-icon', label: 'Catálogo de régimen', route: '/padrones/catalogo-regimen' }
          ]
        },
        {
          label: 'Predial',
          icon: 'fas fa-home custom-icon',
          children: [
            { icon: 'fas fa-layer-group custom-icon', label: 'Clases de predio', route: '/padrones/clases-predio' },
            { icon: 'fas fa-table custom-icon', label: 'Tabla de predio', route: '/padrones/tabla-predio' },
            { icon: 'fas fa-coins custom-icon', label: 'Valores de construcción', route: '/padrones/valores-construccion' },
            { icon: 'fas fa-tags custom-icon', label: 'Tipos de construcción', route: '/padrones/tipos-construccion' },
            { icon: 'fas fa-chart-line custom-icon', label: 'Factores de actualización', route: '/padrones/factores-actualizacion' },
            { icon: 'fas fa-calendar-alt custom-icon', label: 'Periodicidad y cuentas', route: '/padrones/periodicidad-cuentas' },
            { icon: 'fas fa-percentage custom-icon', label: 'Recargos de adeudo', route: '/padrones/recargos-adeudo' },
            { icon: 'fas fa-dollar-sign custom-icon', label: 'Tarifas de adeudo', route: '/padrones/tarifas-adeudo' },
            { icon: 'fas fa-th custom-icon', label: 'Tabla de valores', route: '/padrones/tabla-valores' },
            { icon: 'fas fa-tags custom-icon', label: 'Tipos de categoría', route: '/padrones/tipos-categoria' }
          ]
        },
        {
          label: 'ZOFEMAT',
          icon: 'fas fa-water custom-icon',
          children: [
            { icon: 'fas fa-th custom-icon', label: 'Tabla de valores de ZOFEMAT', route: '/padrones/tabla-valores-zofemat' },
            { icon: 'fas fa-coins custom-icon', label: 'Valores de extracción de ZOFEMAT', route: '/padrones/valores-extraccion-zofemat' }
          ]
        }
      ]
    },
    {
      icon: 'trending_up',
      label: 'Censo',
      children: [
        {
          label: 'Instrumentos',
          icon: 'fas fa-clipboard-list custom-icon',
          children: [
            { icon: 'fas fa-poll custom-icon', label: 'Cuestionarios', route: '/censo/cuestionarios' },
            { icon: 'fas fa-file-alt custom-icon', label: 'Formularios', route: '/censo/formularios' }
          ]
        },
        {
          label: 'Resultados',
          icon: 'fas fa-store custom-icon',
          children: [
            { icon: 'fas fa-store-alt custom-icon', label: 'Comercios Censados', route: '/censo/comercios-censados' }
          ]
        }
      ]
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

    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

}
