import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  @Input() readOnly!: boolean;

  @Output() ratingChange = new EventEmitter<number>();

  stars: number[] = [];
  hoveredRating: number = 0;

  ngOnChanges(): void {
    this.stars = Array(this.maxStars).fill(0);
  }

  getStarClass(index: number): string {
    const value = this.hoveredRating || this.rating;

    if (value >= index + 1) {
      return 'fas fa-star';
    } else if (value >= index + 0.5) {
      return 'fas fa-star-half-stroke';
    } else {
      return 'far fa-star';
    }
  }

  rate(value: number) {
    if (this.readOnly) return;
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }

  hover(value: number) {
    if (this.readOnly) return;
    this.hoveredRating = value;
  }
}
