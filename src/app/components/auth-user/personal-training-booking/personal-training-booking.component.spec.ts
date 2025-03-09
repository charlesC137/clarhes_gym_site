import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainingBookingComponent } from './personal-training-booking.component';

describe('PersonalTrainingBookingComponent', () => {
  let component: PersonalTrainingBookingComponent;
  let fixture: ComponentFixture<PersonalTrainingBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalTrainingBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalTrainingBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
