import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { FooterComponent } from '../../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../../shared-components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HeroBannerComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
