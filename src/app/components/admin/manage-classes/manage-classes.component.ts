import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrl: './manage-classes.component.css',
})
export class ManageClassesComponent {
  classes: any[] = [];
  form: any = {};
  isEditing = false;
  editingIndex: number | null = null;

  searchText = '';
  filterStatus = '';
  weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  pageSize = 5;
  currentPage = 1;

  saveClass() {
    const overlapping = this.classes.some((c, i) => {
      if (this.isEditing && i === this.editingIndex) return false;
      return (
        c.instructor === this.form.instructor &&
        c.date === this.form.date &&
        ((this.form.startTime >= c.startTime &&
          this.form.startTime < c.endTime) ||
          (this.form.endTime > c.startTime && this.form.endTime <= c.endTime))
      );
    });

    if (overlapping) {
      alert(
        'Warning: This class overlaps with an existing one for this instructor.'
      );
      return;
    }

    if (this.isEditing && this.editingIndex !== null) {
      this.classes[this.editingIndex] = { ...this.form };
    } else {
      this.classes.push({ ...this.form });
    }
    this.resetForm();
  }

  editClass(item: any) {
    this.form = { ...item };
    this.isEditing = true;
    this.editingIndex = this.classes.indexOf(item);
  }

  deleteClass(item: any) {
    const index = this.classes.indexOf(item);
    if (index > -1) {
      this.classes.splice(index, 1);
    }
  }

  cancelEdit() {
    this.resetForm();
  }

  resetForm() {
    this.form = {};
    this.isEditing = false;
    this.editingIndex = null;
  }

  getStatusClass(status: string) {
    return status;
  }

  filteredClasses() {
    return this.classes.filter((c) => {
      const searchMatch =
        !this.searchText ||
        c.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        c.instructor.toLowerCase().includes(this.searchText.toLowerCase());
      const statusMatch = !this.filterStatus || c.status === this.filterStatus;
      return searchMatch && statusMatch;
    });
  }

  exportToCSV() {
    const header =
      'Title,Type,Instructor,Date,Start Time,End Time,Capacity,Status';
    const rows = this.classes.map(
      (c) =>
        `${c.title},${c.type},${c.instructor},${c.date},${c.startTime},${c.endTime},${c.capacity},${c.status}`
    );
    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'classes.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  getClassesByDay(day: string) {
    return this.classes.filter((c) => {
      const classDay = new Date(c.date).toLocaleDateString('en-US', {
        weekday: 'long',
      });
      return classDay === day;
    });
  }

  get totalPages() {
    return Math.ceil(this.filteredClasses().length / this.pageSize);
  }

  paginatedClasses() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredClasses().slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
