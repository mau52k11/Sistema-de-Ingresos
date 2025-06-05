import { Component, Input } from '@angular/core';
import { MenuItem } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-opciones',
  standalone: false,
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent {
  @Input() submenus: MenuItem[] = [];
}
