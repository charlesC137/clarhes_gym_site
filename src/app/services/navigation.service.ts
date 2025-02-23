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
    { name: 'Testimonials & Reviews', path: '/testimonials' },
    { name: 'Blog & Resources', path: '/blog' },
  ];

  public loggedInBurger = {
    core: [
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'My Profile', path: '/profile' },
      { name: 'My Classes', path: '/my-classes' },
      { name: 'Membership Management', path: '/membership-management' },
      { name: 'Personal Training Booking', path: '/personal-training' },
      { name: 'Virtual & On-Demand Classes', path: '/virtual-classes' },
    ],
    more: [...this.loggedOutBurger],
  };

  public mobileLoggedInBurger = [
    ...this.pinnedLinks,
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'My Profile', path: '/profile' },
    { name: 'My Classes', path: '/my-classes' },
    { name: 'Membership Management', path: '/membership-management' },
    { name: 'Personal Training Booking', path: '/personal-training' },
    { name: 'Virtual & On-Demand Classes', path: '/virtual-classes' },
    { name: 'Book a Class', path: '/book' },
  ];

  public mobileLoggedOutBurger = [...this.pinnedLinks, ...this.loggedOutBurger];
}
