import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  bookings = [
    {
      instructor: 'Sarah M.',
      image: '../../../../assets/small.jpg',
      className: 'Yoga - Vinyasa Flow',
      date: 'March 12, 10:00 AM',
      location: 'Studio A',
      status: 'Canceled',
    },
    {
      instructor: 'Mark T.',
      image: '../../../../assets/small.jpg',
      className: 'HIIT Workout',
      date: 'March 14, 5:30 PM',
      location: 'Virtual (Zoom)',
      status: 'Confirmed',
    },
    {
      instructor: 'Anna P.',
      image: '../../../../assets/small.jpg',
      className: 'Pilates Core',
      date: 'March 16, 7:00 AM',
      location: 'Studio B',
      status: 'Waitlisted',
    },
  ];

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  badges = [
    { name: '5-Class Streak', icon: 'fas fa-medal' },
    { name: 'Fitness Warrior', icon: 'fas fa-star' },
    { name: 'Elite Member', icon: 'fas fa-crown' },
    { name: 'Challenge Champ', icon: 'fas fa-trophy' },
  ];

  carouselOptions = {
    loop: true,
    margin: 10,
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
