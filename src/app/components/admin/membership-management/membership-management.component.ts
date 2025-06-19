import { Component, OnInit } from '@angular/core';
interface MembershipFeature {
  id: number;
  name: string;
}

interface MembershipPlan {
  id: number;
  name: string;
  price?: number;
  durationInMonths: '' | number;
  billingCycle: '' | 'Monthly' | 'Quarterly' | 'Annually';
  features: MembershipFeature[];
  trialPeriodDays?: number;
  discountPercent?: number;
  isActive: boolean;
  memberCount: number;
}

@Component({
  selector: 'app-membership-management',
  templateUrl: './membership-management.component.html',
  styleUrl: './membership-management.component.css',
})
export class MembershipManagementComponent implements OnInit {
  //Show history of price changes.

  plans: MembershipPlan[] = [];
  newPlan: MembershipPlan = this.initNewPlan();
  editingPlanId: number | null = null;
  searchTerm: string = '';

  ngOnInit(): void {
    this.loadMockPlans();
  }

  initNewPlan(): MembershipPlan {
    return {
      id: Date.now(),
      name: '',
      durationInMonths: '',
      billingCycle: '',
      features: [],
      isActive: true,
      memberCount: 0,
    };
  }

  loadMockPlans() {
    this.plans = [
      {
        id: 1,
        name: 'Basic',
        price: 29.99,
        durationInMonths: 1,
        billingCycle: 'Monthly',
        features: [{ id: 1, name: 'Gym Access' }],
        trialPeriodDays: 7,
        discountPercent: 0,
        isActive: true,
        memberCount: 123,
      },
      {
        id: 2,
        name: 'Premium',
        price: 59.99,
        durationInMonths: 3,
        billingCycle: 'Quarterly',
        features: [
          { id: 1, name: 'Gym Access' },
          { id: 2, name: 'Group Classes' },
          { id: 3, name: 'Sauna' },
        ],
        trialPeriodDays: 14,
        discountPercent: 10,
        isActive: true,
        memberCount: 57,
      },
    ];
  }

  savePlan() {
    if (this.editingPlanId !== null) {
      const index = this.plans.findIndex((p) => p.id === this.editingPlanId);
      this.plans[index] = { ...this.newPlan };
    } else {
      this.plans.push({ ...this.newPlan });
    }

    this.newPlan = this.initNewPlan();
    this.editingPlanId = null;
  }

  editPlan(plan: MembershipPlan) {
    this.newPlan = { ...plan, features: [...plan.features] };
    this.editingPlanId = plan.id;
  }

  deletePlan(planId: number) {
    this.plans = this.plans.filter((p) => p.id !== planId);
    if (this.editingPlanId === planId) {
      this.newPlan = this.initNewPlan();
      this.editingPlanId = null;
    }
  }

  toggleFeature(name: string) {
    const index = this.newPlan.features.findIndex((f) => f.name === name);
    if (index > -1) {
      this.newPlan.features.splice(index, 1);
    } else {
      this.newPlan.features.push({ id: Date.now(), name });
    }
  }

  togglePlanStatus(plan: MembershipPlan) {
    plan.isActive = !plan.isActive;
  }

  filteredPlans() {
    return this.plans.filter((p) =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  hasFeature(name: string): boolean {
    return this.newPlan.features.some((f) => f.name === name);
  }
}
