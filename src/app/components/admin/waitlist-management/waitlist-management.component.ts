import { Component, OnInit } from '@angular/core';

interface Member {
  id: string;
  name: string;
  time: Date;
  avatarUrl?: string;
}

interface ClassSession {
  id: string;
  name: string;
  datetime: Date;
  capacity: number;
  booked: Member[];
  waitlisted: Member[];
  autoClose: boolean;
  bookingOpen: boolean;
}

@Component({
  selector: 'app-waitlist-management',
  templateUrl: './waitlist-management.component.html',
  styleUrls: ['./waitlist-management.component.css'],
})
export class WaitlistManagementComponent implements OnInit {
  classes: ClassSession[] = [];
  selectedClassId: string = '';
  searchTerm = '';
  newName = '';
  newAvatar = '';
  sortBy: 'name' | 'time' = 'name';

  ngOnInit(): void {
    const savedData = localStorage.getItem('classes');
    if (savedData) {
      this.classes = JSON.parse(savedData);
    } else {
      this.classes = [
        {
          id: 'boxing',
          name: 'Boxing - 6PM',
          datetime: new Date('2025-06-14T18:00:00'),
          capacity: 5,
          booked: [],
          waitlisted: [],
          autoClose: true,
          bookingOpen: true,
        },
        {
          id: 'yoga',
          name: 'Yoga - 7AM',
          datetime: new Date('2025-06-15T07:00:00'),
          capacity: 8,
          booked: [],
          waitlisted: [],
          autoClose: true,
          bookingOpen: true,
        },
      ];
    }
    this.selectedClassId = this.classes[0].id;
  }

  get selectedClass(): ClassSession | undefined {
    return this.classes.find((c) => c.id === this.selectedClassId);
  }

  saveToLocal() {
    localStorage.setItem('classes', JSON.stringify(this.classes));
  }

  addMember() {
    const newMember: Member = {
      id: crypto.randomUUID(),
      name: this.newName.trim(),
      time: new Date(),
      avatarUrl: this.newAvatar.trim(),
    };

    if (!this.selectedClass) return;

    if (!this.selectedClass.bookingOpen) return;

    if (this.selectedClass.booked.length < this.selectedClass.capacity) {
      this.selectedClass.booked.push(newMember);
    } else {
      this.selectedClass.waitlisted.push(newMember);
    }

    if (
      this.selectedClass.autoClose &&
      this.selectedClass.booked.length >= this.selectedClass.capacity
    ) {
      this.selectedClass.bookingOpen = false;
    }

    this.newName = '';
    this.newAvatar = '';
    this.saveToLocal();
  }

  cancelBooking(member: Member) {
    if (!this.selectedClass) return;

    this.selectedClass.booked = this.selectedClass.booked.filter(
      (m) => m.id !== member.id
    );

    if (this.selectedClass.waitlisted.length > 0) {
      const promoted = this.selectedClass.waitlisted.shift()!;
      this.selectedClass.booked.push(promoted);
      this.sendNotification(promoted.name);
    }
    this.saveToLocal();
  }

  removeFromWaitlist(member: Member) {
    if (!this.selectedClass) return;
    this.selectedClass.waitlisted = this.selectedClass.waitlisted.filter(
      (m) => m.id !== member.id
    );
    this.saveToLocal();
  }

  toggleBookingStatus() {
    if (!this.selectedClass) return;
    this.selectedClass.bookingOpen = !this.selectedClass.bookingOpen;
    this.saveToLocal();
  }

  filteredAndSorted(list: Member[]): Member[] {
    const filtered = list.filter((m) =>
      m.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return filtered.sort((a, b) => {
      if (this.sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.time.getTime() - b.time.getTime();
      }
    });
  }

  exportToCSV(list: Member[], title: string) {
    const rows = list.map((m) => `${m.name},${m.time.toISOString()}`);
    const csv = `Name,Time\n${rows.join('\n')}`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title}-${new Date().toISOString()}.csv`;
    link.click();
  }

  sendNotification(name: string) {
    alert(`${name} has been promoted from waitlist to booked!`);
  }

  getTimeRemaining(datetime: Date): string {
    const now = new Date().getTime();
    const diff = new Date(datetime).getTime() - now;
    if (diff <= 0) return 'Class started';
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    return `${hrs}h ${mins % 60}m remaining`;
  }
}
