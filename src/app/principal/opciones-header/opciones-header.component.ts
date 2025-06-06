import { Component, EventEmitter, Output } from '@angular/core';

export interface ModuleItem {
  code: string;
  name: string;
  color: string;
  route?: string;
}

@Component({
  selector: 'app-opciones-header',
  standalone: false,
  templateUrl: './opciones-header.component.html',
  styleUrls: ['./opciones-header.component.css']
})
export class OpcionesHeaderComponent {
  @Output() moduleSelected = new EventEmitter<ModuleItem>();
  @Output() closeGrid = new EventEmitter<void>();

  modules: ModuleItem[] = [
    { code: 'PB', name: 'Presupuesto', color: '#4A90E2', route: '/presupuesto' },
    { code: 'MI', name: 'Migración Información', color: '#5BA7F7', route: '/migracion' },
    { code: 'NT', name: 'Nómina Trabajadores', color: '#7B68EE', route: '/nomina' },
    { code: 'OC', name: 'OpenCard Credit', color: '#20B2AA', route: '/opencredit' },
    { code: 'IM', name: 'Ingresos Management', color: '#32CD32', route: '/ingresos' },
    { code: 'OL', name: 'OpenCard Loyalty', color: '#40E0D0', route: '/loyalty' },
    { code: 'CG', name: 'Card Gate', color: '#9370DB', route: '/cardgate' },
    { code: 'CS', name: 'Customer Service', color: '#4169E1', route: '/customer' },
    { code: 'EL', name: 'Event Logistics', color: '#8A2BE2', route: '/events' }
  ];

  onModuleClick(module: ModuleItem): void {
    this.moduleSelected.emit(module);
  }

  onBackdropClick(): void {
    this.closeGrid.emit();
  }

  onGridClick(event: Event): void {
    event.stopPropagation();
  }
}
