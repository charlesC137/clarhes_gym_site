import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-training-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-training-booking.component.html',
  styleUrl: './personal-training-booking.component.css',
})
export class PersonalTrainingBookingComponent {
  trainers = [
    { name: 'Coach Mike', availableSlots: ['9:00 AM', '10:00 AM', '3:00 PM'] },
    { name: 'Coach Sarah', availableSlots: ['8:00 AM', '1:00 PM', '5:00 PM'] },
  ];

  sessionTypes = ['Strength Training', 'Cardio', 'Flexibility', 'HIIT'];
  sessionDurations = [30, 45, 60];

  selectedTrainer: any;
  selectedDate: string = '';
  selectedTime: string = '';
  selectedSessionType: string = '';
  selectedDuration: number = 30;
  availableSlots: string[] = [];

  confirmationMessage: string = '';

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
    }
  }
}
