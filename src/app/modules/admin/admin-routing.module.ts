import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-members', component: ManageMembersComponent },
  { path: 'membership-management', component: MembershipManagementComponent },
  { path: 'manage-classes', component: ManageClassesComponent },
  { path: 'instructor-management', component: InstructorManagementComponent },
  { path: 'waitlist-management', component: WaitlistManagementComponent },
  { path: 'payments-invoicing', component: PaymentsInvoicingComponent },
  { path: 'reports-analytics', component: ReportsAnalyticsComponent },
  { path: 'email-marketing', component: EmailMarketingComponent },
  { path: 'security', component: SecurityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
