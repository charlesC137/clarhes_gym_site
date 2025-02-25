import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { FooterComponent } from '../../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HeroBannerComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicyComponent {}
