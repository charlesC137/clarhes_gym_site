import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { FooterComponent } from '../../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
  ],
  templateUrl: './class-schedule.component.html',
  styleUrl: './class-schedule.component.css',
})
export class ClassScheduleComponent {
  selectedDate: string = '';
  selectedTrainer: string = '';
  selectedDifficulty: string = '';
  selectedLocation: string = '';

  days = [
    {
      name: 'Monday',
      classes: [
        {
          time: '6 AM - 7 AM',
          name: 'Yoga',
          trainer: 'Trainer 1',
          difficulty: 'Beginner',
          location: 'In-Person',
        },
        {
          time: '7 AM - 8 AM',
          name: 'HIIT',
          trainer: 'Trainer 2',
          difficulty: 'Advanced',
          location: 'Virtual',
        },
        {
          time: '8 AM - 9 AM',
          name: 'Pilates',
          trainer: 'Trainer 3',
          difficulty: 'Intermediate',
          location: 'In-Person',
        },
      ],
    },
    {
      name: 'Tuesday',
      classes: [
        {
          time: '6 AM - 7 AM',
          name: 'Cardio',
          trainer: 'Trainer 3',
          difficulty: 'Intermediate',
          location: 'In-Person',
        },
        {
          time: '7 AM - 8 AM',
          name: 'Strength Training',
          trainer: 'Trainer 1',
          difficulty: 'Advanced',
          location: 'Virtual',
        },
        {
          time: '8 AM - 9 AM',
          name: 'CrossFit',
          trainer: 'Trainer 4',
          difficulty: 'Advanced',
          location: 'In-Person',
        },
      ],
    },
    {
      name: 'Wednesday',
      classes: [
        {
          time: '6 AM - 7 AM',
          name: 'Spin Class',
          trainer: 'Trainer 2',
          difficulty: 'Intermediate',
          location: 'In-Person',
        },
        {
          time: '7 AM - 8 AM',
          name: 'Boxing',
          trainer: 'Trainer 5',
          difficulty: 'Advanced',
          location: 'Virtual',
        },
        {
          time: '8 AM - 9 AM',
          name: 'Aerobics',
          trainer: 'Trainer 3',
          difficulty: 'Beginner',
          location: 'In-Person',
        },
      ],
    },
    {
      name: 'Thursday',
      classes: [
        {
          time: '6 AM - 7 AM',
          name: 'Kickboxing',
          trainer: 'Trainer 4',
          difficulty: 'Advanced',
          location: 'In-Person',
        },
        {
          time: '7 AM - 8 AM',
          name: 'Zumba',
          trainer: 'Trainer 2',
          difficulty: 'Beginner',
          location: 'Virtual',
        },
        {
          time: '8 AM - 9 AM',
          name: 'Circuit Training',
          trainer: 'Trainer 5',
          difficulty: 'Intermediate',
          location: 'In-Person',
        },
      ],
    },
    {
      name: 'Friday',
      classes: [
        {
          time: '6 AM - 7 AM',
          name: 'Barre',
          trainer: 'Trainer 3',
          difficulty: 'Intermediate',
          location: 'Virtual',
        },
        {
          time: '7 AM - 8 AM',
          name: 'Powerlifting',
          trainer: 'Trainer 1',
          difficulty: 'Advanced',
          location: 'In-Person',
        },
        {
          time: '8 AM - 9 AM',
          name: 'Stretch & Mobility',
          trainer: 'Trainer 4',
          difficulty: 'Beginner',
          location: 'In-Person',
        },
      ],
    },
    {
      name: 'Saturday',
      classes: [
        {
          time: '7 AM - 8 AM',
          name: 'Bootcamp',
          trainer: 'Trainer 2',
          difficulty: 'Advanced',
          location: 'In-Person',
        },
        {
          time: '8 AM - 9 AM',
          name: 'Bodyweight Training',
          trainer: 'Trainer 3',
          difficulty: 'Intermediate',
          location: 'Virtual',
        },
        {
          time: '9 AM - 10 AM',
          name: 'Tai Chi',
          trainer: 'Trainer 5',
          difficulty: 'Beginner',
          location: 'In-Person',
        },
      ],
    },
    {
      name: 'Sunday',
      classes: [
        {
          time: '8 AM - 9 AM',
          name: 'Meditation & Breathing',
          trainer: 'Trainer 1',
          difficulty: 'Beginner',
          location: 'Virtual',
        },
        {
          time: '9 AM - 10 AM',
          name: 'Kettlebell Training',
          trainer: 'Trainer 4',
          difficulty: 'Intermediate',
          location: 'In-Person',
        },
        {
          time: '10 AM - 11 AM',
          name: 'Calisthenics',
          trainer: 'Trainer 2',
          difficulty: 'Advanced',
          location: 'In-Person',
        },
      ],
    },
  ];

  get filteredSchedule() {
    return this.days.map((day) => ({
      name: day.name,
      classes: day.classes.filter(
        (session) =>
          (!this.selectedTrainer || session.trainer === this.selectedTrainer) &&
          (!this.selectedDifficulty ||
            session.difficulty === this.selectedDifficulty) &&
          (!this.selectedLocation || session.location === this.selectedLocation)
      ),
    }));
  }
}
