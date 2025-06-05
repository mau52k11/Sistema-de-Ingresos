import { Component } from '@angular/core';
import { ChartType, ChartOptions, ChartData } from 'chart.js';

export interface ProductoTop {
  id: number;
  nombre: string;
  ventas: number;
  ingresos: number;
  cambioPorcentaje: number;
  estado: 'Alza' | 'Baja' | 'Estable';
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  productosTop: ProductoTop[] = [
    { id: 1, nombre: 'Ingreso A', ventas: 150, ingresos: 12000, cambioPorcentaje: 12.5, estado: 'Alza' },
    { id: 2, nombre: 'Ingreso B', ventas: 98, ingresos: 8500, cambioPorcentaje: -3.2, estado: 'Baja' },
    { id: 3, nombre: 'Ingreso C', ventas: 220, ingresos: 15800, cambioPorcentaje: 5.1, estado: 'Alza' },
  ];

  ngOnInit(): void {
  }
  
  // Ingresos vs Gastos Mensuales
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    }
  };

  public barChartLabels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [12000, 15000, 14000, 17000, 16000, 18000], label: 'Ingresos' },
      { data: [8000, 9000, 8500, 10000, 9500, 11000], label: 'Gastos' }
    ]
  };

  // Distribución por Categoría
  public doughnutChartLabels: string[] = ['Servicios', 'Productos', 'Suscripciones'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [35000, 25000, 15000],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

}
