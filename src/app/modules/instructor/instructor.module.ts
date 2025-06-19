import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { DashboardComponent } from '../../components/instructor/dashboard/dashboard.component';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from '../../shared-components/star-rating/star-rating.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    HeaderComponent,
    FormsModule,
    StarRatingComponent,
  ],
})
export class InstructorModule {}
