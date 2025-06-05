import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsBillingComponent } from './payments-billing.component';

describe('PaymentsBillingComponent', () => {
  let component: PaymentsBillingComponent;
  let fixture: ComponentFixture<PaymentsBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsBillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
