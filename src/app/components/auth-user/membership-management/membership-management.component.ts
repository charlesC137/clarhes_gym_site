import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-membership-management',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './membership-management.component.html',
  styleUrl: './membership-management.component.css',
})
export class MembershipManagementComponent {}
