import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { MembershipComponent } from './components/membership/membership.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'blog', component: BlogComponent },
  //down here do blog/:id then link to postcomponent or sumn http://localhost:4200/blog/2

  //set routes above
  { path: '**', redirectTo: '' },
];
