import { Component } from '@angular/core';

export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'suspended';
  joinDate: string;
}

@Component({
  selector: 'app-manage-members',
  templateUrl: './manage-members.component.html',
  styleUrl: './manage-members.component.css',
})
export class ManageMembersComponent {
  members: Member[] = [];
  filteredMembers: Member[] = [];
  searchTerm = '';
  filterStatus: 'all' | 'active' | 'suspended' = 'all';

  newMember: Member = this.createEmptyMember();
  editingMember: Member | null = null;
  showModal = false;

  nextId = 1;

  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  constructor() {
    this.loadDummyMembers();
    this.applyFilters();
  }

  createEmptyMember(): Member {
    return {
      id: 0,
      name: '',
      email: '',
      phone: '',
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0],
    };
  }

  loadDummyMembers() {
    this.members = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gym.com',
        phone: '1234567890',
        status: 'active',
        joinDate: '2024-01-01',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@gym.com',
        phone: '0987654321',
        status: 'suspended',
        joinDate: '2024-02-15',
      },
    ];
    this.nextId = this.members.length + 1;
  }

  // applyFilters() {
  //   const term = this.searchTerm.toLowerCase();
  //   this.filteredMembers = this.members.filter((member) => {
  //     const matchName = member.name.toLowerCase().includes(term);
  //     const matchEmail = member.email.toLowerCase().includes(term);
  //     const matchStatus =
  //       this.filterStatus === 'all' || member.status === this.filterStatus;
  //     return (matchName || matchEmail) && matchStatus;
  //   });
  // }

  openAddModal() {
    this.newMember = this.createEmptyMember();
    this.showModal = true;
  }

  openEditModal(member: Member) {
    this.newMember = { ...member };
    this.editingMember = member;
    this.showModal = true;
  }

  saveMember() {
    if (this.editingMember) {
      Object.assign(this.editingMember, this.newMember);
    } else {
      this.newMember.id = this.nextId++;
      this.members.push(this.newMember);
    }
    this.showModal = false;
    this.editingMember = null;
    this.applyFilters();
  }

  deleteMember(id: number) {
    if (confirm('Are you sure you want to delete this member?')) {
      this.members = this.members.filter((m) => m.id !== id);
      this.applyFilters();
    }
  }

  toggleStatus(member: Member) {
    member.status = member.status === 'active' ? 'suspended' : 'active';
    this.applyFilters();
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase();

    const filtered = this.members.filter((member) => {
      const matchName = member.name.toLowerCase().includes(term);
      const matchEmail = member.email.toLowerCase().includes(term);
      const matchStatus =
        this.filterStatus === 'all' || member.status === this.filterStatus;
      return (matchName || matchEmail) && matchStatus;
    });

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.filteredMembers = filtered.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyFilters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }

  exportToCSV() {
    const header = ['ID', 'Name', 'Email', 'Phone', 'Status', 'Join Date'];
    const rows = this.members.map((m) => [
      m.id,
      m.name,
      m.email,
      m.phone,
      m.status,
      m.joinDate,
    ]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += header.join(',') + '\n';

    rows.forEach((row) => {
      csvContent += row.join(',') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'gym_members.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
