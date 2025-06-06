import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from '../../components/public/home/home.component';
import { HeroBannerComponent } from '../../shared-components/hero-banner/hero-banner.component';
import { AboutUsComponent } from '../../components/public/about-us/about-us.component';
import { BlogComponent } from '../../components/public/blog/blog.component';
import { ClassScheduleComponent } from '../../components/public/class-schedule/class-schedule.component';
import { ContactUsComponent } from '../../components/public/contact-us/contact-us.component';
import { FaqsComponent } from '../../components/public/faqs/faqs.component';
import { LoginComponent } from '../../components/public/login/login.component';
import { MembershipComponent } from '../../components/public/membership/membership.component';
import { PrivacyPolicyComponent } from '../../components/public/privacy-policy/privacy-policy.component';
import { SignupComponent } from '../../components/public/signup/signup.component';
import { TrainersComponent } from '../../components/public/trainers/trainers.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    BlogComponent,
    ClassScheduleComponent,
    ContactUsComponent,
    FaqsComponent,
    LoginComponent,
    MembershipComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    TrainersComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderComponent,
    FooterComponent,
    CarouselModule,
    HeroBannerComponent,
    RouterLink,
    FormsModule,
  ],
})
export class PublicModule {}
