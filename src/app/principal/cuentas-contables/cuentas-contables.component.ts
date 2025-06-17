import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface IngresoDetalle {
  liquidacion: string;
  fechaHora: string;
  fechaSistema: string;
  operacionPOS: string;
  tienda: string;
  tpv: string;
  empleado: string;
  tipoOperacion: string;
  naturalezaOperacion: string;
  tipoDocumento: string;
  numeroDocumento: string;
  cliente?: string;
  concepto: string;
  categoria: string;
  monto: number;
}

export interface DetalleVenta {
  fechaLinea: string;
  factura: string;
  codigo: string;
  descripcion: string;
  categoria: string;
  tarifa: string;
  cantidad: number;
  pvp: number;
  descuento: number;
  ieps: number;
  iva: number;
  totalImporte: number;
}

export interface DetalleImpuesto {
  tipo: string;
  baseImponible: number;
  cuotaEspecial: number;
  cuotaIVA: number;
  totalImporte: number;
}

@Component({
  selector: 'app-cuentas-contables',
  standalone: false,
  templateUrl: './cuentas-contables.component.html',
  styleUrl: './cuentas-contables.component.css'
})
export class CuentasContablesComponent implements OnInit {
  
  datosGenerales: IngresoDetalle = {
    liquidacion: '14/06/2025-IC-001',
    fechaHora: '14/06/2025 23:23',
    fechaSistema: '14/06/2025 23:23',
    operacionPOS: '1279682',
    tienda: 'Sucursal Centro',
    tpv: 'TPV 1 (CAJA 1)',
    empleado: 'MARIA FERNANDEZ GONZALEZ',
    tipoOperacion: 'Ingreso',
    naturalezaOperacion: 'Corriente',
    tipoDocumento: 'Recibo de Ingreso',
    numeroDocumento: 'RIC001215875',
    cliente: 'GOBIERNO MUNICIPAL',
    concepto: 'Pago de Impuesto Predial',
    categoria: 'IMPUESTOS',
    monto: 1250.00
  };

  detalleVentas: DetalleVenta[] = [
    {
      fechaLinea: '14/06/2025 23:23',
      factura: 'RIC001',
      codigo: '001',
      descripcion: 'IMPUESTO PREDIAL 2025',
      categoria: 'IMPUESTOS DIRECTOS',
      tarifa: 'TARIFA A',
      cantidad: 1,
      pvp: 1086.21,
      descuento: 0.00,
      ieps: 0.00,
      iva: 0.00,
      totalImporte: 1086.21
    },
    {
      fechaLinea: '14/06/2025 23:23',
      factura: 'RIC001',
      codigo: '002',
      descripcion: 'RECARGO POR MORA',
      categoria: 'RECARGOS',
      tarifa: 'TARIFA B',
      cantidad: 1,
      pvp: 163.79,
      descuento: 0.00,
      ieps: 0.00,
      iva: 0.00,
      totalImporte: 163.79
    }
  ];

  detalleImpuestos: DetalleImpuesto[] = [
    {
      tipo: 'IMPUESTO PREDIAL (100%)',
      baseImponible: 1086.21,
      cuotaEspecial: 0.00,
      cuotaIVA: 0.00,
      totalImporte: 1086.21
    },
    {
      tipo: 'RECARGO POR MORA (15%)',
      baseImponible: 163.79,
      cuotaEspecial: 0.00,
      cuotaIVA: 0.00,
      totalImporte: 163.79
    }
  ];

  totalGeneral: number = 1250.00;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Aquí puedes cargar los datos específicos basados en el ID de la ruta
    // this.cargarDatos();
  }

  volver(): void {
    this.router.navigate(['/reportes']);
  }

  imprimir(): void {
    window.print();
  }

  exportarPDF(): void {
    // Implementar exportación a PDF
    console.log('Exportando a PDF...');
  }

  private cargarDatos(): void {
    // Implementar carga de datos desde el servicio
    const id = this.route.snapshot.paramMap.get('id');
    // Llamar al servicio para obtener los datos específicos
  }
}