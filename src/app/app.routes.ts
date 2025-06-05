import { Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { ContactUsComponent } from './components/public/contact-us/contact-us.component';
import { FaqsComponent } from './components/public/faqs/faqs.component';
import { TrainersComponent } from './components/public/trainers/trainers.component';
import { MembershipComponent } from './components/public/membership/membership.component';
import { PrivacyPolicyComponent } from './components/public/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { ClassScheduleComponent } from './components/public/class-schedule/class-schedule.component';
import { LoginComponent } from './components/public/login/login.component';
import { SignupComponent } from './components/public/signup/signup.component';
import { DashboardComponent } from './components/auth-user/dashboard/dashboard.component';
import { ProfileComponent } from './components/auth-user/profile/profile.component';
import { MembershipManagementComponent } from './components/auth-user/membership-management/membership-management.component';
import { BookClassComponent } from './components/auth-user/book-class/book-class.component';
import { MyClassesComponent } from './components/auth-user/my-classes/my-classes.component';
import { PersonalTrainingBookingComponent } from './components/auth-user/personal-training-booking/personal-training-booking.component';
import { LoyaltyRewardsComponent } from './components/auth-user/loyalty-rewards/loyalty-rewards.component';
import { PaymentsBillingComponent } from './components/auth-user/payments-billing/payments-billing.component';
import { NotificationsComponent } from './components/auth-user/notifications/notifications.component';
import { VirtualClassesComponent } from './components/auth-user/virtual-classes/virtual-classes.component';
import { DashboardComponent as AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';

export const routes: Routes = [
  //general links
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'blog', component: BlogComponent },
  //down here do blog/:id then link to postcomponent or sumn http://localhost:4200/blog/2
  { path: 'schedule', component: ClassScheduleComponent },

  //login/signup
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  //auth user links
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

  //admin links

  { path: 'admin-dashboard', component: AdminDashboardComponent },

  //set routes above
  { path: '**', redirectTo: '' },
];
