import { Component, OnInit } from '@angular/core';

export interface Account {
  id?: number;
  code: string;
  reference: string;
  name: string;
  type: 'Activo' | 'Pasivo' | 'Patrimonio' | 'Ingresos' | 'Gastos';
  status: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-cuentas-contables',
  standalone: false,
  templateUrl: './cuentas-contables.component.html',
  styleUrls: ['./cuentas-contables.component.css']
})
export class CuentasContablesComponent implements OnInit {

  accounts: Account[] = [
    { id: 1, code: '101', reference: '101', name: 'Caja Chica', type: 'Activo', status: 'Activo' },
    { id: 2, code: '102', reference: '102', name: 'Bancos', type: 'Activo', status: 'Activo' },
    { id: 3, code: '103', reference: '103', name: 'Cuentas por Cobrar', type: 'Activo', status: 'Activo' },
    { id: 4, code: '201', reference: '201', name: 'Cuentas por Pagar', type: 'Pasivo', status: 'Activo' },
    { id: 5, code: '301', reference: '301', name: 'Capital Social', type: 'Patrimonio', status: 'Activo' },
    { id: 6, code: '401', reference: '401', name: 'Ingresos por Ventas', type: 'Ingresos', status: 'Inactivo' },
    { id: 7, code: '501', reference: '501', name: 'Gastos Administrativos', type: 'Gastos', status: 'Activo' },
    { id: 8, code: '502', reference: '502', name: 'Gastos de Ventas', type: 'Gastos', status: 'Activo' },
  ];

  filteredAccounts: Account[] = [];
  searchTerm: string = '';
  selectedRows: number[] = [];
  showFilters: boolean = false;
  itemsPerPage: number = 10;
  currentPage: number = 1;
  showAddModal: boolean = false;

  // Filtros
  filterType: string = '';
  filterStatus: string = '';
  selectedAccount: Account | null = null;
  Math: any;

  ngOnInit(): void {
    this.filteredAccounts = [...this.accounts];
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredAccounts = this.accounts.filter(account => {
      const matchesSearch = !this.searchTerm ||
        account.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        account.code.includes(this.searchTerm) ||
        account.reference.includes(this.searchTerm);

      const matchesType = !this.filterType || account.type === this.filterType;
      const matchesStatus = !this.filterStatus || account.status === this.filterStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
    this.currentPage = 1;
  }

  toggleSelectAll(event: any): void {
    if (event.target.checked) {
      // this.selectedRows = this.filteredAccounts.map(account => account.id);
      this.selectedRows = this.filteredAccounts
        .map(account => account.id)
        .filter((id): id is number => id !== undefined);

    } else {
      this.selectedRows = [];
    }
  }

  toggleSelectRow(id: number | undefined, event: any): void {
  if (id === undefined) return;

  if (event.target.checked) {
    this.selectedRows.push(id);
  } else {
    this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
  }
}


  isSelected(id: number | undefined): boolean {
  return id !== undefined && this.selectedRows.includes(id);
}

  isAllSelected(): boolean {
    return this.filteredAccounts.length > 0 &&
      this.selectedRows.length === this.filteredAccounts.length;
  }

  editAccount(account: Account): void {
    console.log('Editar cuenta:', account);
  }

  deleteAccount(account: Account): void {
    console.log('Eliminar cuenta:', account);
  }

  viewAccount(account: Account): void {
    console.log('Ver cuenta:', account);
  }

  exportData(): void {
    console.log('Exportar datos');
  }

  importData(): void {
    console.log('Importar datos');
  }

  getStatusClass(status: string): string {
    return status === 'Activo' ? 'status-active' : 'status-inactive';
  }

  getTypeClass(type: string): string {
    const typeClasses: { [key: string]: string } = {
      'Activo': 'type-activo',
      'Pasivo': 'type-pasivo',
      'Patrimonio': 'type-patrimonio',
      'Ingresos': 'type-ingresos',
      'Gastos': 'type-gastos'
    };
    return typeClasses[type] || 'type-default';
  }

  get paginatedAccounts(): Account[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredAccounts.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredAccounts.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  newAccount: Partial<Account> = {
    code: '',
    name: '',
    reference: '',
    type: 'Pasivo',
    status: 'Activo'
  };

  openAddModal(): void {
    this.showAddModal = true;
    this.newAccount = {
      code: '',
      name: '',
      reference: '',
      type: 'Pasivo',
      status: 'Activo'
    };
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.newAccount = {};
  }

  saveAccount(): void {
    if (this.newAccount.code && this.newAccount.name) {
      const account: Account = {
        code: this.newAccount.code,
        name: this.newAccount.name,
        reference: this.newAccount.reference || '',
        type: this.newAccount.type || 'Pasivo',
        status: this.newAccount.status || 'Activo'
      };

      // Aquí agregarías la cuenta al array o enviarías al backend
      console.log('Guardando cuenta:', account);
      this.closeAddModal();
    }
  }

}
