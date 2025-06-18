import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-clasificaciones',
  standalone: false,
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.css']
})
export class ClasificacionesComponent {
  menuItems: MenuItem[] = [
    {
      label: 'MOTOR ARMONIZACIÓN CONTABLE',
      expanded: true,
      children: [
        {
          label: 'CLASIFICADORES Y CATALOGOS',
          expanded: true,
          children: [
            {
              label: 'CONTABLES',
              expanded: true,
              children: [
                { label: 'CLASIFICADOR POR RUBRO DE INGRESO' },
                { label: 'CATÁLOGO CONAC' },
                { label: 'PLAN DE CUENTAS' },
                { label: 'CATÁLOGO DE CUENTAS CONTABLES' },
                { label: 'CONSULTA DE CATÁLOGO DE CUENTAS CONTABLES' },
                { label: 'ESTRUCTURA DE CUENTAS' },
                { label: 'PADRÓN CONTABLE' },
                { label: 'ALTA DE CUENTAS BANCARIAS' },
                {
                  label: 'CONTABLES',
                  expanded: true,
                  children: [
                    { label: 'E9B - TIPO DE PERÍODO' },
                    { label: 'E9C - TIPO DE PÓLIZA' },
                    { label: 'E9D - ORIGEN DE PÓLIZA' },
                    { label: 'E9E - ESTATUS DE PÓLIZA' },
                    { label: 'E9F - MOMENTO CONTABLE' },
                    { label: 'E9G - TIPO DE VINCULACIÓN' },
                    { label: 'E9H - AGRUPACIÓN DE PÓLIZA' },
                    { label: 'E9I - TIPO DE DOCUMENTO FUENTE' },
                    { label: 'E9J - GRUPO DE UNIDADES RESPONSABLES' },
                    { label: 'E9K - UNIDADES RESPONSABLES' },
                    { label: 'E9L - UNIDADES EJECUTORAS' },
                    { label: 'E9M - TIPO DE DOCUMENTO INTERNO' },
                    { label: 'E9Q - SUBTIPO DE DOCUMENTO INTERNO' },
                    { label: 'E9N - AGRUPACIÓN DEL DOCUMENTO FUENTE' },
                    { label: 'E9O - AGRUPACIÓN DE LÍNEA DE PÓLIZA' }
                  ]
                }
              ]
            },
            {
              label: 'CLAVES',
              expanded: true,
              children: [
                { label: 'CATÁLOGO DE CLAVES DE INGRESOS' },
                { label: 'CATÁLOGOS DE NIVELES' }
              ]
            }
          ]
        },
        { label: 'PERÍODOS CONTABLES' },
        { label: 'PÓLIZAS CONTABLES' }
      ]
    }
  ];

  // toggle(item: MenuItem) {
  //   if (item.children) {
  //     item.expanded = !item.expanded;
  //   }
  // }

  // getItemClass(item: MenuItem, level: number): string {
  //   return `level-${level}`;
  // }
  toggle(item: MenuItem) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }

  getItemClass(item: MenuItem, level: number): string {
    return `level-${level}`;
  }

  onMouseEnter(item: MenuItem) {
    if (item.children && item.children.length > 0) {
    }
  }

  onMouseLeave(item: MenuItem) {
  }
}
