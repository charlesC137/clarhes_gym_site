import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared-components/header/header.component';
import { FooterComponent } from '../../../shared-components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  customOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 20,
    dots: true,
    autoHeight: true,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1000: { items: 3 },
    },
  };

  testimonials = [
    {
      image: '../../../../assets/10.jpg',
      text: 'This gym changed my life! I lost 20lbs in 3 months with expert guidance.',
      user: 'John D',
    },
    {
      image: '../../../../assets/8.jpg',
      text: '"Amazing trainers and a motivating environment. I feel stronger every day!"',
      user: 'Sarah D',
    },
    {
      image: '../../../../assets/9.jpg',
      text: '"Best decision I ever made. The transformation programs are next level!"',
      user: 'Mike D',
    },
    {
      image: '../../../../assets/11.jpg',
      text: '"Best decision I ever made. The transformation programs are next level!"',
      user: 'Mike D',
    },
    {
      image: '../../../../assets/10.jpg',
      text: '"Best decision I ever made. The transformation programs are next level!"',
      user: 'Mike D',
    },
    {
      image: '../../../../assets/7.jpg',
      text: '"Best decision I ever made. The transformation programs are next level!"',
      user: 'Mike D',
    },
  ];

  classes = [
    {
      name: 'HIIT Training',
      schedule: 'Mon & Wed - 6 PM',
      image: '../../../../assets/6.jpg',
    },
    {
      name: 'Yoga',
      schedule: 'Tue & Thu - 7 AM',
      image: '../../../../assets/5.jpg',
    },
    {
      name: 'Strength Training',
      schedule: 'Fri - 5 PM',
      image: '../../../../assets/4.jpg',
    },
  ];
}
