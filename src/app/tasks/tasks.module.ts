import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TasksPage } from './tasks.page';

@NgModule({
  declarations: [TasksPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TasksPageRoutingModule,
    SharedModule,
  ],
})
export class TasksPageModule {}
