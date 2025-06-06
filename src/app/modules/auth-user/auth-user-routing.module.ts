import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../components/auth-user/dashboard/dashboard.component';
import { ProfileComponent } from '../../components/auth-user/profile/profile.component';
import { MembershipManagementComponent } from '../../components/auth-user/membership-management/membership-management.component';
import { BookClassComponent } from '../../components/auth-user/book-class/book-class.component';
import { MyClassesComponent } from '../../components/auth-user/my-classes/my-classes.component';
import { PersonalTrainingBookingComponent } from '../../components/auth-user/personal-training-booking/personal-training-booking.component';
import { LoyaltyRewardsComponent } from '../../components/auth-user/loyalty-rewards/loyalty-rewards.component';
import { PaymentsBillingComponent } from '../../components/auth-user/payments-billing/payments-billing.component';
import { NotificationsComponent } from '../../components/auth-user/notifications/notifications.component';
import { VirtualClassesComponent } from '../../components/auth-user/virtual-classes/virtual-classes.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'membership-management', component: MembershipManagementComponent },
  { path: 'book', component: BookClassComponent },
  { path: 'my-classes', component: MyClassesComponent },
  { path: 'personal-training', component: PersonalTrainingBookingComponent },
  { path: 'loyalty-rewards', component: LoyaltyRewardsComponent },
  { path: 'payments-billing', component: PaymentsBillingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'virtual-classes', component: VirtualClassesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthUserRoutingModule {}
