import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared-components/header/header.component';

@Component({
  selector: 'app-payments-billing',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './payments-billing.component.html',
  styleUrl: './payments-billing.component.css',
})
export class PaymentsBillingComponent {
  activeTab = 'subscription';

  subscriptions = {
    plan: 'Premium',
    status: 'Active',
    startDate: '2024-05-01',
    renewalDate: '2025-05-01',
    nextPayment: 49.99,
  };

  paymentHistory = [
    {
      date: '2024-05-01',
      amount: 49.99,
      status: 'Paid',
      invoiceId: 'INV-20240501',
    },
    {
      date: '2024-04-01',
      amount: 49.99,
      status: 'Paid',
      invoiceId: 'INV-20240401',
    },
    {
      date: '2024-03-01',
      amount: 49.99,
      status: 'Refunded',
      invoiceId: 'INV-20240301',
    },
  ];

  savedCards = [
    {
      type: 'Visa',
      number: '**** **** **** 1234',
      expiry: '12/25',
      default: true,
    },
    {
      type: 'MasterCard',
      number: '**** **** **** 5678',
      expiry: '11/24',
      default: false,
    },
  ];

  billingInfo = {
    fullName: 'John Doe',
    email: 'john@example.com',
    address: '123 Fit Street, Gym City, GA',
  };

  refundRequests = [
    { invoiceId: 'INV-20240301', reason: 'Service issue', status: 'Processed' },
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
