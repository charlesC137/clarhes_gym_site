import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyRewardsComponent } from './loyalty-rewards.component';

describe('LoyaltyRewardsComponent', () => {
  let component: LoyaltyRewardsComponent;
  let fixture: ComponentFixture<LoyaltyRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyRewardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoyaltyRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
