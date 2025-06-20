import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  //pull the blogs to be in the slideshow randomly
  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 20,
    nav: true,
    navText: ['‹', '›'],
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };
  blogPosts = [
    {
      id: 1,
      title: '5 Best Gym Exercises',
      description: 'Learn the best exercises to build strength and endurance.',
      image: '../../../../assets/7.jpg',
    },
    {
      id: 2,
      title: 'Nutrition Tips for Muscle Gain',
      description: 'What to eat to maximize muscle growth.',
      image: '../../../../assets/1.jpg',
    },
    {
      id: 3,
      title: 'Cardio vs. Weight Training',
      description: 'Which is better for fat loss?',
      image: '../../../../assets/10.jpg',
    },
    {
      id: 3,
      title: 'Cardio vs. Weight Training',
      description: 'Which is better for fat loss?',
      image: '../../../../assets/9.jpg',
    },
    {
      id: 3,
      title: 'Cardio vs. Weight Training',
      description: 'Which is better for fat loss?',
      image: '../../../../assets/8.jpg',
    },
    {
      id: 3,
      title: 'Cardio vs. Weight Training',
      description: 'Which is better for fat loss?',
      image: '../../../../assets/11.jpg',
    },
    {
      id: 3,
      title: 'Cardio vs. Weight Training',
      description: 'Which is better for fat loss?',
      image: '../../../../assets/13.jpg',
    },
  ];
}
