import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../shared-components/hero-banner/hero-banner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
    RouterLink,
  ],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  trainers = [
    {
      name: 'John Doe',
      image: '../../../assets/1.jpg',
      specialization: 'Strength Training',
      qualifications: 'Certified Personal Trainer (CPT)',
      availability: 'Mon-Fri: 10AM - 6PM',
      bookingLink: '#',
    },
    {
      name: 'Jane Smith',
      image: '../../../assets/3.jpg',
      specialization: 'Yoga & Flexibility',
      qualifications: 'RYT-200 Yoga Instructor',
      availability: 'Tue-Thu: 8AM - 12PM',
      bookingLink: '#',
    },
  ];
}
