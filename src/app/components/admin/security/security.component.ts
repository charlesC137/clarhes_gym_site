import { Component } from '@angular/core';

interface UserPermission {
  username: string;
  role: string;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
  activeSessions: number;
  is2FAEnabled: boolean;
  ipWhitelist: string[];
}

interface SecurityLog {
  timestamp: string;
  user: string;
  action: string;
  ip: string;
}

interface RoleTemplate {
  name: string;
  permissions: {
    canView: boolean;
    canEdit: boolean;
    canDelete: boolean;
  };
}

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
})
export class SecurityComponent {
  //   Modal dialogs for confirming session revocations or IP removal

  // Password change form with strength meter

  users: UserPermission[] = [
    {
      username: 'admin',
      role: 'Admin',
      canView: true,
      canEdit: true,
      canDelete: true,
      activeSessions: 2,
      is2FAEnabled: true,
      ipWhitelist: ['127.0.0.1'],
    },
    {
      username: 'john_doe',
      role: 'Trainer',
      canView: true,
      canEdit: true,
      canDelete: false,
      activeSessions: 1,
      is2FAEnabled: false,
      ipWhitelist: [],
    },
    {
      username: 'jane_fit',
      role: 'Member',
      canView: true,
      canEdit: false,
      canDelete: false,
      activeSessions: 1,
      is2FAEnabled: false,
      ipWhitelist: [],
    },
  ];

  logs: SecurityLog[] = [
    {
      timestamp: '2025-06-19 09:12',
      user: 'admin',
      action: 'Added new trainer',
      ip: '127.0.0.1',
    },
    {
      timestamp: '2025-06-19 10:25',
      user: 'john_doe',
      action: 'Edited class schedule',
      ip: '127.0.0.5',
    },
  ];

  roleTemplates: RoleTemplate[] = [
    {
      name: 'Admin',
      permissions: { canView: true, canEdit: true, canDelete: true },
    },
    {
      name: 'Trainer',
      permissions: { canView: true, canEdit: true, canDelete: false },
    },
    {
      name: 'Member',
      permissions: { canView: true, canEdit: false, canDelete: false },
    },
  ];

  selectedUserIndex = 0;
  newIP = '';
  searchQuery = '';

  // Role creation
  newRoleName = '';
  newRolePermissions = {
    canView: false,
    canEdit: false,
    canDelete: false,
  };

  // Editing role template
  selectedRoleToEdit: string = '';
  editPermissions = {
    canView: false,
    canEdit: false,
    canDelete: false,
  };

  loginAttempts = [
    {
      user: 'admin',
      timestamp: '2025-06-19 08:12',
      status: 'Success',
      ip: '192.168.0.10',
    },
    {
      user: 'trainer1',
      timestamp: '2025-06-19 08:30',
      status: 'Failed',
      ip: '192.168.0.11',
    },
    {
      user: 'jane_fit',
      timestamp: '2025-06-19 09:15',
      status: 'Success',
      ip: '10.0.0.1',
    },
  ];

  onRoleSelect(roleName: string) {
    const role = this.roleTemplates.find((r) => r.name === roleName);
    if (role) {
      this.selectedRoleToEdit = role.name;
      this.editPermissions = { ...role.permissions }; // clone values
    }
  }

  saveRoleEdits() {
    const index = this.roleTemplates.findIndex(
      (r) => r.name === this.selectedRoleToEdit
    );
    if (index > -1) {
      this.roleTemplates[index].permissions = { ...this.editPermissions };
      this.selectedRoleToEdit = '';
    }
  }

  addIP() {
    if (this.newIP.trim()) {
      this.users[this.selectedUserIndex].ipWhitelist.push(this.newIP.trim());
      this.newIP = '';
    }
  }

  removeIP(ip: string) {
    const list = this.users[this.selectedUserIndex].ipWhitelist;
    this.users[this.selectedUserIndex].ipWhitelist = list.filter(
      (item) => item !== ip
    );
  }

  toggle2FA(index: number) {
    this.users[index].is2FAEnabled = !this.users[index].is2FAEnabled;
  }

  revokeSessions(index: number) {
    this.users[index].activeSessions = 0;
  }

  filterLogs(query: string) {
    return this.logs.filter(
      (log) =>
        log.user.includes(query) ||
        log.action.includes(query) ||
        log.ip.includes(query)
    );
  }

  createRole() {
    if (!this.newRoleName.trim()) return;

    this.roleTemplates.push({
      name: this.newRoleName.trim(),
      permissions: { ...this.newRolePermissions },
    });

    this.newRoleName = '';
    this.newRolePermissions = {
      canView: false,
      canEdit: false,
      canDelete: false,
    };
  }

  get usersWith2FA(): number {
    return this.users.filter((user) => user.is2FAEnabled).length;
  }

  get totalWhitelistedIPs(): number {
    return this.users.reduce((acc, user) => acc + user.ipWhitelist.length, 0);
  }

  get totalActiveSessions(): number {
    return this.users.reduce((acc, user) => acc + user.activeSessions, 0);
  }

  exportLogs() {
    const headers = 'Timestamp,User,Action,IP\n';
    const body = this.logs
      .map((log) => `${log.timestamp},${log.user},${log.action},${log.ip}`)
      .join('\n');
    const csv = headers + body;

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'security_logs.csv';
    link.click();

    window.URL.revokeObjectURL(url);
  }
}
