import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  badges = [
    { name: '5-Class Streak', icon: 'fas fa-medal' },
    { name: 'Fitness Warrior', icon: 'fas fa-star' },
    { name: 'Elite Member', icon: 'fas fa-crown' },
    { name: 'Challenge Champ', icon: 'fas fa-trophy' },
  ];

  carouselOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
}
