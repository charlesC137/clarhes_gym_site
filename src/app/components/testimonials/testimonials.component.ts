import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { HeroBannerComponent } from '../../shared-components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  reviews = [
    {
      text: 'This gym changed my life! Great trainers and awesome vibe.',
      author: 'John Doe',
      rating: 5,
    },
    {
      text: 'Love the energy here. Equipment is top-notch!',
      author: 'Jane Smith',
      rating: 4,
    },
    {
      text: 'Amazing place to work out. Friendly staff and clean environment.',
      author: 'Mike Johnson',
      rating: 5,
    },
  ];

  getStars(rating: number): string[] {
    return new Array(rating).fill('★');
  }
}
