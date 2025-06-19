import { Component } from '@angular/core';

interface Payment {
  id: string;
  client: string;
  items: { name: string; amount: number }[];
  amount: number;
  date: string;
  method: string;
  status: 'Paid' | 'Pending' | 'Refunded';
  dueDate: string;
  tax: number;
}

@Component({
  selector: 'app-payments-invoicing',
  templateUrl: './payments-invoicing.component.html',
  styleUrls: ['./payments-invoicing.component.css'],
})
export class PaymentsInvoicingComponent {
  ///add a refunds part to the html. just check notes
  payments: Payment[] = [];
  clients: string[] = ['John Doe', 'Jane Smith'];
  newPayment: Payment = this.getEmptyInvoice();

  filterStatus: string = 'All';

  get totalRevenue() {
    return this.payments
      .filter((p) => p.status === 'Paid')
      .reduce((sum, p) => sum + p.amount, 0);
  }

  get pendingTotal() {
    return this.payments
      .filter((p) => p.status === 'Pending')
      .reduce((sum, p) => sum + p.amount, 0);
  }

  get refundedTotal() {
    return this.payments
      .filter((p) => p.status === 'Refunded')
      .reduce((sum, p) => sum + p.amount, 0);
  }

  get filteredPayments() {
    if (this.filterStatus === 'All') return this.payments;
    return this.payments.filter((p) => p.status === this.filterStatus);
  }

  getEmptyInvoice(): Payment {
    return {
      id: '',
      client: '',
      items: [{ name: '', amount: 0 }],
      amount: 0,
      date: new Date().toISOString().split('T')[0],
      method: 'Credit Card',
      status: 'Pending',
      dueDate: '',
      tax: 0,
    };
  }

  addItem() {
    this.newPayment.items.push({ name: '', amount: 0 });
  }

  removeItem(index: number) {
    this.newPayment.items.splice(index, 1);
  }

  calculateTotal() {
    const base = this.newPayment.items.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    return base + (base * this.newPayment.tax) / 100;
  }

  submitInvoice() {
    this.newPayment.id = 'INV-' + Math.floor(Math.random() * 10000);
    this.newPayment.amount = this.calculateTotal();
    this.payments.unshift({ ...this.newPayment });
    if (!this.clients.includes(this.newPayment.client)) {
      this.clients.push(this.newPayment.client);
    }
    this.newPayment = this.getEmptyInvoice();
  }

  refund(payment: Payment) {
    if (payment.status === 'Paid') {
      payment.status = 'Refunded';
    }
  }

  markAsPaid(payment: Payment) {
    if (payment.status === 'Pending') {
      payment.status = 'Paid';
    }
  }
}
