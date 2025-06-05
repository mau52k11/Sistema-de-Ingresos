import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   @Input() isSidebarCollapsed: boolean = true;

   locations = ['CARRETERA A CHIHUAHUA', 'CENTRO HISTÓRICO', 'ZONA INDUSTRIAL'];
  
  selectedLocation = 'CARRETERA A CHIHUAHUA';
  userInfo = {
    name: 'Juan Pérez',
    avatar: 'images/El_Fedelobo.webp'
  };

  notifications = 3;
  messages = 2;

  onLocationChange() {
    console.log('Cambiar ubicación');
  }

  onNotificationClick() {
    console.log('Ver notificaciones');
  }

  onMessageClick() {
    console.log('Ver mensajes');
  }

  onProfileClick() {
    console.log('Ver perfil');
  }
}
