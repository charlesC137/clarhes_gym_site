import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-reports-analytics',
  templateUrl: './reports-analytics.component.html',
  styleUrls: ['./reports-analytics.component.css'],
})
export class ReportsAnalyticsComponent implements OnInit {
  // Metrics
  totalMembers = 320;
  activeToday = 42;
  monthlyRevenue = 12000;
  sessionsBooked = 88;

  // Filters
  ranges = ['Today', 'This Week', 'This Month', 'Custom'];
  plans = ['Basic', 'Premium', 'Pro'];
  selectedRange = 'This Month';
  selectedPlan = '';
  customStart = '';
  customEnd = '';
  searchTerm = '';
  toggleCompare = false;

  // Live Stats
  activeMembers = 8;
  popularClasses = ['HIIT', 'Yoga', 'Spin'];
  checkinsByHour = [5, 8, 12, 20, 18, 10, 6, 3];

  // Charts
  attendanceConfig: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Check-ins',
          data: [50, 60, 55, 70, 65, 80, 90],
          borderColor: '#00A3FF',
          backgroundColor: 'rgba(0, 163, 255, 0.1)',
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: { responsive: true, plugins: { legend: { display: true } } },
  };

  membershipConfig: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'New Members',
          data: [20, 25, 30, 35, 40, 45],
          backgroundColor: '#39FF14',
        },
      ],
    },
    options: { responsive: true, plugins: { legend: { display: true } } },
  };

  financeConfig: ChartConfiguration<'pie'> = {
    type: 'pie',
    data: {
      labels: ['Income', 'Expenses'],
      datasets: [
        {
          label: 'Finance',
          data: [8000, 5000],
          backgroundColor: ['#00A3FF', '#FF3D3D'],
        },
      ],
    },
    options: { responsive: true },
  };

  trainerConfig: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: ['Alice', 'Bob', 'Carol', 'Dave'],
      datasets: [
        {
          label: 'Sessions',
          data: [30, 25, 40, 20],
          backgroundColor: '#FFCD00',
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: 'y',
      plugins: { legend: { display: true } },
    },
  };

  // Tables
  members = [
    {
      name: 'John Doe',
      joinDate: '2025-06-01',
      plan: 'Premium',
      source: 'Website',
    },
    {
      name: 'Jane Smith',
      joinDate: '2025-06-05',
      plan: 'Basic',
      source: 'Referral',
    },
  ];

  transactions = [
    { date: '2025-06-10', type: 'Income', amount: 150, category: 'Membership' },
    { date: '2025-06-12', type: 'Expense', amount: 50, category: 'Equipment' },
  ];

  ngOnInit(): void {
    this.simulateLiveCheckins();
  }

  applyFilters() {
    console.log(
      'Filters applied: ',
      this.selectedRange,
      this.selectedPlan,
      this.searchTerm
    );
  }

  exportCSV() {
    const csv =
      `Name,Join Date,Plan,Source\n` +
      this.members
        .map((m) => `${m.name},${m.joinDate},${m.plan},${m.source}`)
        .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'members.csv';
    a.click();
  }

  exportPDF() {
    alert('You can use html2canvas + jsPDF for real export.');
  }

  sendEmail() {
    alert('Simulated email sent!');
  }

  simulateLiveCheckins() {
    setInterval(() => {
      this.activeMembers = Math.floor(Math.random() * 20) + 1;
    }, 5000);
  }
}
