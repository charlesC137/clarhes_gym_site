import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  trainer = {
    name: 'Alex Stone',
    specialty: 'Strength & Conditioning',
    photoUrl: '',
  };

  defaultAvatar = '../../../../assets/5.jpg';

  classes = [
    {
      id: 1,
      name: 'HIIT Blast',
      date: new Date(),
      location: 'Studio A',
      members: ['John', 'Lisa', 'Tom'],
    },
    // more classes
  ];

  bookings = [
    {
      id: 1,
      memberName: 'Lisa Ray',
      className: 'HIIT Blast',
      date: new Date(),
      status: 'Pending',
    },
    // more bookings
  ];

  availability = [
    { day: 'Monday', time: '10:00 AM', isAvailable: true },
    { day: 'Tuesday', time: '2:00 PM', isAvailable: false },
    // more slots
  ];

  notifications = [
    { message: 'You have a new booking for Yoga Flow.' },
    { message: '3 members requested reschedules.' },
  ];

  stats = {
    classesThisWeek: 5,
    members: 20,
    attendanceRate: 87,
  };

  ngOnInit() {}

  editProfile() {
    console.log('Edit profile clicked');
  }

  manageClass(id: number) {
    console.log('Manage class:', id);
  }

  cancelClass(id: number) {
    console.log('Cancel class:', id);
  }

  toggleAttendance(id: number) {
    console.log('Attendance toggled for booking:', id);
  }

  toggleSlot(slot: any) {
    slot.isAvailable = !slot.isAvailable;
  }

  trainerRating = 3.5;

  onTrainerRated(value: number) {
    console.log('Trainer rated:', value);
  }
}
