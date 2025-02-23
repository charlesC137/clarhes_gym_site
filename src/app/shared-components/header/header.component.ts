import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavigationService } from '../../services/navigation.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private navService: NavigationService
  ) {}

  showSidebar = false;
  isAuth = this.authService.checkAuthStatus();
  isMobile = false;
  showMoreSubmenu = false;
  pinnedLinks: any = [];
  burgerLinks: any = { core: [], more: [] };
  mobileBurgerLinks: any = [];

  ngOnInit() {
    this.pinnedLinks = [...this.navService.pinnedLinks];
    this.updateLinks();

    this.breakpointObserver
      .observe(['(max-width: 640px)'])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.updateLinks();
      });
  }

  updateLinks() {
    if (this.isMobile) {
      this.mobileBurgerLinks = this.isAuth
        ? this.navService.mobileLoggedInBurger
        : this.navService.mobileLoggedOutBurger;
    } else {
      if (this.isAuth) {
        this.burgerLinks.core = [...this.navService.loggedInBurger.core];
        this.burgerLinks.more = [...this.navService.loggedInBurger.more];
      } else {
        this.burgerLinks.more = [...this.navService.loggedOutBurger];
      }
    }
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  toggleMoreSubmenu() {
    this.showMoreSubmenu = !this.showMoreSubmenu;
    console.log(this.showMoreSubmenu);
  }
}
