import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../../shared-components/header/header.component';

import { DashboardComponent } from '../../components/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, HeaderComponent],
})
export class AdminModule {}
