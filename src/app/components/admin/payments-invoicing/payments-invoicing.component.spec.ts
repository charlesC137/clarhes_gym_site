import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsInvoicingComponent } from './payments-invoicing.component';

describe('PaymentsInvoicingComponent', () => {
  let component: PaymentsInvoicingComponent;
  let fixture: ComponentFixture<PaymentsInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsInvoicingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
