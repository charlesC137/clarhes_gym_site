import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  faqs = [
    {
      question: 'How do I sign up?',
      answer: "Click on the 'Sign Up' button and follow the instructions.",
      open: false,
    },
    {
      question: 'What is the refund policy?',
      answer: 'We offer a 30-day refund policy for all memberships.',
      open: false,
    },
    {
      question: 'How do I reset my password?',
      answer: "Click on 'Forgot Password' and follow the steps to reset it.",
      open: false,
    },
  ];

  toggleFAQ(faq: any) {
    faq.open = !faq.open;
  }
}
