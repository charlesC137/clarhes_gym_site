import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUserRoutingModule } from './auth-user-routing.module';

import { HeaderComponent } from '../../shared-components/header/header.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../shared-components/hero-banner/hero-banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { BookClassComponent } from '../../components/auth-user/book-class/book-class.component';
import { DashboardComponent } from '../../components/auth-user/dashboard/dashboard.component';
import { LoyaltyRewardsComponent } from '../../components/auth-user/loyalty-rewards/loyalty-rewards.component';
import { MembershipManagementComponent } from '../../components/auth-user/membership-management/membership-management.component';
import { MyClassesComponent } from '../../components/auth-user/my-classes/my-classes.component';
import { NotificationsComponent } from '../../components/auth-user/notifications/notifications.component';
import { PaymentsBillingComponent } from '../../components/auth-user/payments-billing/payments-billing.component';
import { PersonalTrainingBookingComponent } from '../../components/auth-user/personal-training-booking/personal-training-booking.component';
import { ProfileComponent } from '../../components/auth-user/profile/profile.component';
import { VirtualClassesComponent } from '../../components/auth-user/virtual-classes/virtual-classes.component';

@NgModule({
  declarations: [
    BookClassComponent,
    DashboardComponent,
    LoyaltyRewardsComponent,
    MembershipManagementComponent,
    MyClassesComponent,
    NotificationsComponent,
    PaymentsBillingComponent,
    PersonalTrainingBookingComponent,
    ProfileComponent,
    VirtualClassesComponent,
  ],
  imports: [
    CommonModule,
    AuthUserRoutingModule,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
    CarouselModule,
    FormsModule,
    RouterLink,
  ],
})
export class AuthUserModule {}
