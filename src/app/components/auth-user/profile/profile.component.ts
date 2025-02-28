import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterLink],
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
