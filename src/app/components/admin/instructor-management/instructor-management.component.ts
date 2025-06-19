import { Component, OnInit } from '@angular/core';

interface ClassSchedule {
  day: string;
  time: string;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
}

interface Instructor {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  specialization: string[];
  isActive: boolean;
  schedule: ClassSchedule[];
  reviews: Review[];
}

@Component({
  selector: 'app-instructor-management',
  templateUrl: './instructor-management.component.html',
  styleUrl: './instructor-management.component.css',
})
export class InstructorManagementComponent implements OnInit {
  //Clicks an instructor to open detailed schedule and class history
  instructors: Instructor[] = [];
  filteredInstructors: Instructor[] = [];
  searchTerm: string = '';
  filterSpecialization: string = '';
  specializations: string[] = [
    'Strength Training',
    'Yoga',
    'Cardio',
    'CrossFit',
  ];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  times = ['8AM', '10AM', '12PM', '2PM', '4PM'];
  newClass: ClassSchedule = { day: '', time: '' };
  selectedInstructorId: string = '';

  ngOnInit() {
    this.instructors = this.getMockInstructors();
    this.filteredInstructors = [...this.instructors];
  }

  getMockInstructors(): Instructor[] {
    return [
      {
        id: '1',
        name: 'Alex Johnson',
        email: 'alex@gym.com',
        profileImage: 'https://placehold.co/600x400/000000/FFFFFF/png',
        specialization: ['Yoga', 'Cardio'],
        isActive: true,
        schedule: [{ day: 'Monday', time: '10AM' }],
        reviews: [{ rating: 5, comment: 'Great energy!', date: '2024-06-01' }],
      },
      {
        id: '2',
        name: 'Monica Ray',
        email: 'monica@gym.com',
        profileImage: 'https://placehold.co/600x400/000000/FFFFFF/png',
        specialization: ['Strength Training', 'CrossFit'],
        isActive: false,
        schedule: [],
        reviews: [],
      },
    ];
  }

  filterInstructors() {
    this.filteredInstructors = this.instructors.filter((instructor) => {
      const matchesName = instructor.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchesSpec =
        this.filterSpecialization === '' ||
        instructor.specialization.includes(this.filterSpecialization);
      return matchesName && matchesSpec;
    });
  }

  toggleStatus(instructor: Instructor) {
    instructor.isActive = !instructor.isActive;
  }

  assignClass(instructor: Instructor) {
    if (!this.newClass.day || !this.newClass.time) return;

    const conflict = instructor.schedule.some(
      (c) => c.day === this.newClass.day && c.time === this.newClass.time
    );
    if (conflict) {
      alert('Conflict detected! This time is already booked.');
    } else {
      instructor.schedule.push({ ...this.newClass });
      alert(`Class assigned on ${this.newClass.day} at ${this.newClass.time}`);
    }

    this.newClass = { day: '', time: '' };
  }

  uploadImage(event: any, instructor: Instructor) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        instructor.profileImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  exportCSV() {
    const headers = ['Name', 'Email', 'Status', 'Specializations', 'Schedule'];
    const rows = this.instructors.map((i) => [
      i.name,
      i.email,
      i.isActive ? 'Active' : 'Inactive',
      i.specialization.join('/'),
      i.schedule.map((s) => `${s.day}-${s.time}`).join(';'),
    ]);

    let csv =
      headers.join(',') + '\n' + rows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'instructors.csv';
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  getAverageRating(reviews: Review[]): number {
    if (!reviews.length) return 0;
    return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  }

  addReview(instructor: Instructor, comment: string, rating: number) {
    instructor.reviews.push({
      rating,
      comment,
      date: new Date().toISOString().split('T')[0],
    });
  }
}
