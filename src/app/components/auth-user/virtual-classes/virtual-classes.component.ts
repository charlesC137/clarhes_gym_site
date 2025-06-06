import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-classes',
  templateUrl: './virtual-classes.component.html',
  styleUrl: './virtual-classes.component.css',
})
export class VirtualClassesComponent {
  activeTab = 'live';
  searchQuery = '';
  selectedCategory = '';
  selectedLevel = '';
  selectedClass: any = null;

  categories = ['Yoga', 'HIIT', 'Strength', 'Cardio', 'Pilates'];
  levels = ['Beginner', 'Intermediate', 'Advanced'];

  classes = [
    {
      title: 'Morning Yoga Flow',
      instructor: 'Alex Doe',
      duration: 30,
      level: 'Beginner',
      category: 'Yoga',
      live: true,
      thumbnail: '../../../../assets/2.jpg',
      videoUrl: 'assets/demo1.mp4',
      progress: 80,
    },
    {
      title: 'HIIT Blast',
      instructor: 'Sam Fit',
      duration: 20,
      level: 'Advanced',
      category: 'HIIT',
      live: false,
      thumbnail: '../../../../assets/2.jpg',
      videoUrl: 'assets/demo2.mp4',
      progress: 45,
    },
    {
      title: 'Strength Circuit',
      instructor: 'Jane Iron',
      duration: 40,
      level: 'Intermediate',
      category: 'Strength',
      live: false,
      thumbnail: '../../../../assets/2.jpg',
      videoUrl: 'assets/demo3.mp4',
      progress: 0,
    },
  ];

  filteredClasses() {
    return this.classes.filter((c) => {
      const matchesTab = this.activeTab === 'live' ? c.live : !c.live;
      const matchesSearch = this.searchQuery
        ? c.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;
      const matchesCategory = this.selectedCategory
        ? c.category === this.selectedCategory
        : true;
      const matchesLevel = this.selectedLevel
        ? c.level === this.selectedLevel
        : true;
      return matchesTab && matchesSearch && matchesCategory && matchesLevel;
    });
  }

  openModal(c: any) {
    this.selectedClass = c;
  }
}
