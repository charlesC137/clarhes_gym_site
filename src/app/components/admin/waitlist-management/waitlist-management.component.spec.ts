import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistManagementComponent } from './waitlist-management.component';

describe('WaitlistManagementComponent', () => {
  let component: WaitlistManagementComponent;
  let fixture: ComponentFixture<WaitlistManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitlistManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitlistManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
