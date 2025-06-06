import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../../shared-components/header/header.component';

import { DashboardComponent } from '../../components/admin/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderComponent,
    NgChartsModule,
    FormsModule,
  ],
})
export class AdminModule {}
