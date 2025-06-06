import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private authService: AuthService) {}

  isAuthenticated = this.authService.checkAuthStatus();

  public pinnedLinks = [
    { name: 'Home', path: '/' },
    { name: 'Class Schedule', path: '/schedule' },
    { name: 'Membership Plans', path: '/membership' },
    { name: 'Contact Us', path: '/contact' },
  ];

  public loggedOutBurger = [
    { name: 'About Us', path: '/about' },
    { name: 'Trainers & Instructors', path: '/trainers' },
    { name: 'FAQ & Help Center', path: '/faq' },
    { name: 'Blog & Resources', path: '/blog' },
  ];

  public loggedInBurger = {
    core: [
      { name: 'Dashboard', path: '/user/dashboard' },
      { name: 'My Profile', path: '/user/profile' },
      { name: 'My Classes', path: '/user/my-classes' },
      { name: 'Membership Management', path: '/user/membership-management' },
      { name: 'Personal Training Booking', path: '/user/personal-training' },
      { name: 'Virtual & On-Demand Classes', path: '/user/virtual-classes' },
    ],
    more: [...this.loggedOutBurger],
  };

  public mobileLoggedInBurger = [
    ...this.pinnedLinks,
    { name: 'Dashboard', path: '/user/dashboard' },
    { name: 'My Profile', path: '/user/profile' },
    { name: 'My Classes', path: '/user/my-classes' },
    { name: 'Membership Management', path: '/user/membership-management' },
    { name: 'Personal Training Booking', path: '/user/personal-training' },
    { name: 'Virtual & On-Demand Classes', path: '/user/virtual-classes' },
    { name: 'Book a Class', path: '/user/book' },
  ];

  public mobileLoggedOutBurger = [...this.pinnedLinks, ...this.loggedOutBurger];
}
