import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class AuthModule { }