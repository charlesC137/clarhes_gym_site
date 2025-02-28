import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-class',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-class.component.html',
  styleUrl: './book-class.component.css',
})
export class BookClassComponent {
  selectedInstructor: string = '';

  gymClasses = [
    {
      name: 'Yoga',
      instructor: 'Alice',
      time: '10:00 AM',
      capacity: 5,
      bookings: [],
    },
    {
      name: 'HIIT',
      instructor: 'Bob',
      time: '12:00 PM',
      capacity: 3,
      bookings: [],
    },
    {
      name: 'Pilates',
      instructor: 'Charlie',
      time: '2:00 PM',
      capacity: 4,
      bookings: [],
    },
  ];

  instructors = ['Alice', 'Bob', 'Charlie'];
  userBookings: any[] = [];

  // Filter classes based on selected instructor
  filteredClasses() {
    return this.selectedInstructor
      ? this.gymClasses.filter((c) => c.instructor === this.selectedInstructor)
      : this.gymClasses;
  }

  // Book a class
  bookClass(gymClass: any) {
    if (gymClass.bookings.length < gymClass.capacity) {
      const booking = { name: gymClass.name, time: gymClass.time };
      this.userBookings.push(booking);
      gymClass.bookings.push(booking);
    }
  }

  // Cancel booking
  cancelBooking(booking: any) {
    this.userBookings = this.userBookings.filter((b) => b !== booking);
    this.gymClasses.forEach((c) => {
      c.bookings = c.bookings.filter((b) => b !== booking);
    });
  }
}
