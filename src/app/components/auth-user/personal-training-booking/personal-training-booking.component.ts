import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-personal-training-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    HeroBannerComponent,
    CarouselModule,
  ],
  templateUrl: './personal-training-booking.component.html',
  styleUrl: './personal-training-booking.component.css',
})
export class PersonalTrainingBookingComponent {
  selectedTrainer: any = null;

  trainers = [
    {
      name: 'Mike Johnson',
      photo: '../../../../assets/10.jpg',
      specialty: 'Strength & Conditioning',
      tagline: 'Push beyond your limits.',
      availableSlots: ['9:00 AM', '10:00 AM', '3:00 PM'],
    },
    {
      name: 'Sarah Lee',
      photo: '../../../../assets/3.jpg',
      specialty: 'Weight Loss & Mobility',
      tagline: 'Move better, feel better.',
      availableSlots: ['9:00 AM', '10:00 AM', '3:00 PM'],
    },
    {
      name: 'James Kim',
      photo: '../../../../assets/8.jpg',
      specialty: 'Muscle Building',
      tagline: 'Build power with purpose.',
      availableSlots: ['9:00 AM', '10:00 AM', '3:00 PM'],
    },
  ];

  sessionTypes = ['Strength Training', 'Cardio', 'Flexibility', 'HIIT'];
  sessionDurations = [30, 45, 60];

  selectedDate: string = '';
  selectedTime: string = '';
  selectedSessionType: string = '';
  selectedDuration: number = 30;
  availableSlots: string[] = [];

  confirmationMessage: string = '';

  selectTrainer(trainer: any) {
    if (this.selectedTrainer?.name === trainer.name) {
      this.selectedTrainer = null;
    } else {
      this.selectedTrainer = trainer;
    }
  }

  carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ['←', '→'],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  //clicking more info should take you to the meet your trainers page and to the trainers page specifically

  loadAvailableSlots() {
    if (this.selectedTrainer) {
      this.availableSlots = this.selectedTrainer.availableSlots;
    }
  }

  bookSession() {
    if (this.selectedTrainer && this.selectedDate && this.selectedTime) {
      this.confirmationMessage = `Session confirmed with ${this.selectedTrainer.name} on ${this.selectedDate} at ${this.selectedTime} for ${this.selectedDuration} min (${this.selectedSessionType}).`;
    } else {
      this.confirmationMessage = 'Please fill in all details!';
      setTimeout(() => {
        this.confirmationMessage = '';
      }, 4000);
    }
  }
}
