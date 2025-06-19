import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from '../../components/admin/dashboard/dashboard.component';
import { ManageMembersComponent } from '../../components/admin/manage-members/manage-members.component';
import { MembershipManagementComponent } from '../../components/admin/membership-management/membership-management.component';
import { ManageClassesComponent } from '../../components/admin/manage-classes/manage-classes.component';
import { InstructorManagementComponent } from '../../components/admin/instructor-management/instructor-management.component';
import { WaitlistManagementComponent } from '../../components/admin/waitlist-management/waitlist-management.component';
import { PaymentsInvoicingComponent } from '../../components/admin/payments-invoicing/payments-invoicing.component';
import { ReportsAnalyticsComponent } from '../../components/admin/reports-analytics/reports-analytics.component';
import { EmailMarketingComponent } from '../../components/admin/email-marketing/email-marketing.component';
import { SecurityComponent } from '../../components/admin/security/security.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManageMembersComponent,
    MembershipManagementComponent,
    ManageClassesComponent,
    InstructorManagementComponent,
    WaitlistManagementComponent,
    PaymentsInvoicingComponent,
    ReportsAnalyticsComponent,
    EmailMarketingComponent,
    SecurityComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderComponent,
    NgChartsModule,
    FormsModule,
  ],
})
export class AdminModule {}
