import { Component, OnInit } from '@angular/core';

interface Notification {
  id: number;
  type: 'class' | 'membership' | 'waitlist' | 'promotion';
  title: string;
  message: string;
  time: Date;
  read: boolean;
  snoozed?: boolean;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  filter: 'all' | 'class' | 'membership' | 'waitlist' | 'promotion' = 'all';

  //when user wants to clear all notifs, ask are you sure

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.notifications = [
      {
        id: 1,
        type: 'class',
        title: 'Yoga Class Reminder',
        message: 'Your yoga class starts in 1 hour.',
        time: new Date(),
        read: false,
      },
      {
        id: 2,
        type: 'membership',
        title: 'Membership Renewal',
        message: 'Your membership expires in 3 days.',
        time: new Date(),
        read: false,
      },
      {
        id: 3,
        type: 'waitlist',
        title: 'Spot Available',
        message: 'A spot just opened for HIIT class!',
        time: new Date(),
        read: false,
      },
    ];
  }

  markAsRead(id: number): void {
    const notification = this.notifications.find((n) => n.id === id);
    if (notification) notification.read = true;
  }

  dismiss(id: number): void {
    this.notifications = this.notifications.filter((n) => n.id !== id);
  }

  snooze(id: number): void {
    const notification = this.notifications.find((n) => n.id === id);
    if (notification) notification.snoozed = true;
  }

  clearAll(): void {
    this.notifications = [];
  }

  markAllRead(): void {
    this.notifications.forEach((n) => (n.read = true));
  }

  filteredNotifications(): Notification[] {
    if (this.filter === 'all') return this.notifications;
    return this.notifications.filter((n) => n.type === this.filter);
  }

  unreadCount(): number {
    return this.notifications.filter((n) => !n.read).length;
  }

  setFilter(filter: typeof this.filter): void {
    this.filter = filter;
  }
}
