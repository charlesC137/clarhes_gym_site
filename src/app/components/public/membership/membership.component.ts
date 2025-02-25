import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { FooterComponent } from '../../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HeroBannerComponent],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css',
})
export class MembershipComponent {}
