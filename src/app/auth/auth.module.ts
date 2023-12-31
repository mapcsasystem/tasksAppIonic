import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthPage, LoginPage, RegisterPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedModule,
  ],
})
export class AuthPageModule {}
