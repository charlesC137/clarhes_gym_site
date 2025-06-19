import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //adjust the links in the header
  //Disable the buttons after one is clicked (to prevent toggling) in the attendance table

  pieChartOptions!: ChartOptions<'pie'>;
  showAnalyticsTable: boolean = false;
  selectedTrainer = '';
  selectedTimeframe = 'thisWeek';
  customDate = '';
  trainers = [];
  searchName = '';
  selectedClass = '';
  selectedStatus = '';
  selectedExportType: string = 'revenue';

  alerts = [
    { id: 1, message: '3 invoices are pending payment.', type: 'warning' },
    {
      id: 2,
      message: 'Class "Morning Yoga" has low attendance.',
      type: 'info',
    },
    { id: 3, message: '5 memberships expire this week.', type: 'danger' },
  ];

  ngOnInit(): void {
    const stats = this.membershipStats;

    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#FFFFFF',
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const index = context.dataIndex;
              const total = context.dataset.data.reduce(
                (a: number, b: number) => a + b,
                0
              );
              const plan = stats[index];
              const percent = ((plan.members / total) * 100).toFixed(1);

              return [
                `${plan.name}`,
                `Members: ${plan.members}`,
                `Share: ${percent}%`,
                `Avg Duration: ${plan.avgDurationMonths} mo`,
                `Revenue: $${plan.monthlyRevenue.toLocaleString()}`,
              ];
            },
          },
        },
      },
    };
  }

  public lineChartData: ChartData<'line'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        data: [
          1000, 5000, 10000, 15000, 20000, 50, 2000, 20000, 15000, 2000, 1000,
          10000,
        ],
        label: 'Revenue',
        borderColor: '#00A3FF',
        backgroundColor: 'rgba(124, 197, 239, 0.2)',
        fill: true,
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      legend: {
        labels: {
          color: '#ffffff',
          font: {
            size: 20,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: '#333333' },
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: '#333333' },
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Basic', 'Premium', 'VIP', 'Trial'],
    datasets: [
      {
        data: [120, 80, 25, 30],
        backgroundColor: ['#4E79A7', '#F28E2B', '#E15759', '#76B7B2'],
        borderColor: '#1A1A1A',
        borderWidth: 2,
      },
    ],
  };

  public pieChartPlugins = [];

  membershipStats = [
    {
      name: 'Basic',
      members: 120,
      avgDurationMonths: 6,
      monthlyRevenue: 10 * 120,
    },
    {
      name: 'Premium',
      members: 80,
      avgDurationMonths: 10,
      monthlyRevenue: 25 * 80,
    },
    {
      name: 'VIP',
      members: 25,
      avgDurationMonths: 12,
      monthlyRevenue: 50 * 25,
    },
    {
      name: 'Trial',
      members: 30,
      avgDurationMonths: 1,
      monthlyRevenue: 0,
    },
  ];

  membershipPlans = [
    {
      id: 1,
      name: 'Basic',
      members: 120,
      status: 'Active',
      monthlyRevenue: 1800,
      avgDuration: 4,
      churnRate: 12,
    },
    {
      id: 2,
      name: 'Premium',
      members: 80,
      status: 'Active',
      monthlyRevenue: 2400,
      avgDuration: 6,
      churnRate: 8,
    },
    {
      id: 3,
      name: 'VIP',
      members: 25,
      status: 'Active',
      monthlyRevenue: 1250,
      avgDuration: 9,
      churnRate: 5,
    },
    {
      id: 4,
      name: 'Trial',
      members: 30,
      status: 'Trial',
      monthlyRevenue: 0,
      avgDuration: 0.5,
      churnRate: 65,
    },
  ];

  toggleAnalyticTable() {
    this.showAnalyticsTable = !this.showAnalyticsTable;
  }

  classes = [
    {
      className: 'HIIT',
      trainer: 'Mark',
      date: '2025-06-04',
      time: '7:00AM',
      capacity: 20,
      attended: 18,
    },
    {
      className: 'Pilates',
      trainer: 'Alicia',
      date: '2025-06-03',
      time: '5:30PM',
      capacity: 15,
      attended: 12,
    },
  ];

  get filteredClasses() {
    return this.classes.filter((cls) => {
      const matchTrainer = this.selectedTrainer
        ? cls.trainer === this.selectedTrainer
        : true;
      return matchTrainer;
    });
  }

  getAttendancePercentage(cls: any) {
    return Math.round((cls.attended / cls.capacity) * 100);
  }

  bookings = [
    {
      name: 'John Smith',
      class: 'Boxing',
      date: '2025-06-03',
      time: '6:00PM',
      payment: 'Paid',
      status: 'Attended',
    },
    {
      name: 'Sara Lee',
      class: 'Zumba',
      date: '2025-06-02',
      time: '7:00PM',
      payment: 'Unpaid',
      status: 'No-show',
    },
  ];

  get filteredBookings() {
    return this.bookings.filter((b) => {
      const matchName = this.searchName
        ? b.name.toLowerCase().includes(this.searchName.toLowerCase())
        : true;
      const matchClass = this.selectedClass
        ? b.class === this.selectedClass
        : true;
      const matchStatus = this.selectedStatus
        ? b.status === this.selectedStatus
        : true;
      return matchName && matchClass && matchStatus;
    });
  }

  markAttendance(booking: any, status: 'Attended' | 'No-show') {
    booking.status = status;
  }

  dismissAlert(alertToRemove: any) {
    this.alerts = this.alerts.filter((alert) => alert.id !== alertToRemove.id);
  }

  exportData(format: string) {
    const exportType = this.selectedExportType;
    alert(`Exporting ${exportType} data as ${format.toUpperCase()}.`);
  }
}
