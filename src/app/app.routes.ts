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

export const routes: Routes = [
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
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'membership-management', component: MembershipManagementComponent },
  { path: 'book', component: BookClassComponent },

  //set routes above
  { path: '**', redirectTo: '' },
];
