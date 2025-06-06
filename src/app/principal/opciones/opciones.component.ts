import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-opciones',
  standalone: false,
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnChanges {
  @Input() submenus: MenuItem[] = [];
  @Input() titulo: string = '';

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
}