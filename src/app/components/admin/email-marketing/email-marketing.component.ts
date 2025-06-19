import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrls: ['./email-marketing.component.css'],
})
export class EmailMarketingComponent {
  campaigns: any[] = [];
  form: any = this.getEmptyForm();
  editingIndex: number | null = null;

  templates = ['Basic', 'Promo', 'Fitness Tips', 'Event Invite', 'Minimal'];
  audiences = [
    'All Users',
    'Inactive 7 Days',
    'New Signups',
    'Class Finishers',
  ];

  // Automation
  automationTrigger = '';
  automationActions: string[] = [];

  // Reports
  selectedCampaign = '';
  openRate = 65;
  clickRate = 45;
  bounceRate = 5;

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Open', 'Click', 'Bounce'],
    datasets: [
      {
        data: [this.openRate, this.clickRate, this.bounceRate],
        label: 'Rates (%)',
      },
    ],
  };

  getEmptyForm() {
    return {
      name: '',
      subject: '',
      audience: '',
      body: 'Hi {{firstName}}, welcome!',
      schedule: '',
      template: 'Basic',
    };
  }

  saveCampaign() {
    if (this.editingIndex !== null) {
      this.campaigns[this.editingIndex] = { ...this.form };
    } else {
      this.campaigns.push({ ...this.form });
    }
    this.form = this.getEmptyForm();
    this.editingIndex = null;
  }

  editCampaign(i: number) {
    this.form = { ...this.campaigns[i] };
    this.editingIndex = i;
  }

  deleteCampaign(i: number) {
    this.campaigns.splice(i, 1);
  }

  renderPreview(content: string): string {
    return content.replace('{{firstName}}', 'Alex');
  }

  addAutomationAction(action: string) {
    if (action) {
      this.automationActions.push(action);
    }
  }

  exportCSV() {
    const csv = [
      ['Campaign Name', 'Open Rate', 'Click Rate', 'Bounce Rate'],
      ...this.campaigns.map((c) => [
        c.name,
        `${this.openRate}%`,
        `${this.clickRate}%`,
        `${this.bounceRate}%`,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    //saveAs(blob, 'campaign_report.csv');
  }
}
