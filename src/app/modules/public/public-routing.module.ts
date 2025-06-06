import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../../components/public/about-us/about-us.component';
import { BlogComponent } from '../../components/public/blog/blog.component';
import { ClassScheduleComponent } from '../../components/public/class-schedule/class-schedule.component';
import { ContactUsComponent } from '../../components/public/contact-us/contact-us.component';
import { FaqsComponent } from '../../components/public/faqs/faqs.component';
import { MembershipComponent } from '../../components/public/membership/membership.component';
import { PrivacyPolicyComponent } from '../../components/public/privacy-policy/privacy-policy.component';
import { TrainersComponent } from '../../components/public/trainers/trainers.component';
import { HomeComponent } from '../../components/public/home/home.component';
import { LoginComponent } from '../../components/public/login/login.component';
import { SignupComponent } from '../../components/public/signup/signup.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
