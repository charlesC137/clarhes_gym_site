import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CarouselModule, CommonModule],
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
      status: 'Confirmed',
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
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 600,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
}
