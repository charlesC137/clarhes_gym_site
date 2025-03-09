import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-my-classes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    HeaderComponent,
    HeroBannerComponent,
  ],
  templateUrl: './my-classes.component.html',
  styleUrl: './my-classes.component.css',
})
export class MyClassesComponent {
  searchQuery: string = '';

  classes = [
    {
      id: 1,
      name: 'HIIT Training',
      trainer: 'Coach Mike',
      date: '2025-03-01',
      time: '08:00 AM',
      status: 'upcoming',
      location: 'Room A',
      description:
        'High-intensity interval training for strength and endurance.',
    },
    {
      id: 2,
      name: 'Yoga',
      trainer: 'Sarah Lee',
      date: '2025-02-20',
      time: '06:30 PM',
      status: 'attended',
      location: 'Studio B',
      description: 'Relaxing yoga session for flexibility and mindfulness.',
    },
    {
      id: 3,
      name: 'Spin Class',
      trainer: 'David Kim',
      date: '2025-02-25',
      time: '07:00 AM',
      status: 'canceled',
      location: 'Spin Room',
      description: 'Cardio-focused cycling session with high-energy music.',
    },
  ];

  cancelClass(id: number) {
    const classItem = this.classes.find((c) => c.id === id);
    if (classItem) classItem.status = 'canceled';
  }

  markAsAttended(id: number) {
    const classItem = this.classes.find((c) => c.id === id);
    if (classItem) classItem.status = 'attended';
  }

  rescheduleClass(id: number) {
    const newDate = prompt('Enter new date (YYYY-MM-DD):');
    if (newDate) {
      const classItem = this.classes.find((c) => c.id === id);
      if (classItem) {
        classItem.date = newDate;
        classItem.status = 'rescheduled';
      }
    }
  }

  filteredClasses() {
    return this.classes.filter(
      (classItem) =>
        classItem.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        classItem.trainer.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['←', '→'],
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
}
