import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-loyalty-rewards',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, HeaderComponent, CarouselModule],
  templateUrl: './loyalty-rewards.component.html',
  styleUrl: './loyalty-rewards.component.css',
})
export class LoyaltyRewardsComponent {
  userPoints = 1200;

  //make the badges be in carousel form

  earnedBadges = [
    {
      name: 'First Workout',
      icon: 'assets/badges/badge1.png',
      description: 'Completed your first workout',
    },
    {
      name: 'Referral Champ',
      icon: 'assets/badges/badge2.png',
      description: 'Referred 5 friends',
    },
    {
      name: 'Challenge Beast',
      icon: 'assets/badges/badge3.png',
      description: 'Completed 3 challenges',
    },
  ];

  referralCode = 'GYMBOOST2025';
  referrals = 3;
  copyMessage = '';

  challenges = [
    { name: '10-Day Streak', progress: 70 },
    { name: 'Burn 5000 Calories', progress: 45 },
    { name: '30 Days of Cardio', progress: 15 },
  ];

  rewards = [
    { name: '10% Off Next Month', points: 500 },
    { name: 'Free Gym Bag', points: 1000 },
    { name: 'Free Personal Session', points: 2000 },
  ];

  notification = '';

  copyReferral() {
    navigator.clipboard.writeText(this.referralCode);
    this.copyMessage = 'Referral code copied!';
    setTimeout(() => (this.copyMessage = ''), 2000);
  }

  redeemReward(reward: any) {
    if (this.userPoints >= reward.points) {
      this.userPoints -= reward.points;
      this.notification = `You’ve redeemed: ${reward.name}`;
      setTimeout(() => (this.notification = ''), 3000);
    }
  }

  badgeCarouselOptions: OwlOptions = {
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['←', '→'],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
}
