import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from '../../shared/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  standalone: false,
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnChanges {
  @Input() submenus: MenuItem[] = [];
  @Input() titulo: string = '';

  constructor(private router: Router){}

  getInitials(label: string): string {
    return label
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  mostrarAnimacion: boolean[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.submenus);
    console.log('titulo:', this.titulo);
    if (changes['submenus']) {
      this.mostrarAnimacion = this.submenus.map(() => false);

      setTimeout(() => {
        this.mostrarAnimacion = this.submenus.map(() => true);
      }, 50);
    }
  }

  navegar(item: MenuItem) {
  if (item.route) {
    this.router.navigate([item.route]);
  }
}

expandedItems: { [key: string]: Set<number> } = {};

toggleExpand(groupLabel: string, index: number): void {
  if (!this.expandedItems[groupLabel]) {
    this.expandedItems[groupLabel] = new Set();
  }
  if (this.expandedItems[groupLabel].has(index)) {
    this.expandedItems[groupLabel].delete(index);
  } else {
    this.expandedItems[groupLabel].add(index);
  }
}

isExpanded(groupLabel: string, index: number): boolean {
  return this.expandedItems[groupLabel]?.has(index);
}

}