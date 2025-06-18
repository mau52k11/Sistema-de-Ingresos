import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../../shared/sidebar/sidebar.component';

interface Account {
  id: string;
  code: string;
  name: string;
  type: 'ACTIVO' | 'PASIVO' | 'PATRIMONIO' | 'INGRESO' | 'GASTO';
  level: number;
  parent?: string;
  balance: number;
  children?: Account[];
  expanded?: boolean;
  hasChildren?: boolean;
}

interface AccountSummary {
  type: string;
  total: number;
  count: number;
  change: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-plan-cuentas',
  standalone: false,
  templateUrl: './plan-cuenta.component.html',
  styleUrls: ['./plan-cuenta.component.css']
})
export class PlanCuentaComponent implements OnInit {
  
  searchTerm: string = '';
  selectedType: string = 'TODOS';
  showAddModal: boolean = false;
  selectedAccount: Account | null = null;
  
  accountTypes = ['TODOS', 'ACTIVO', 'PASIVO', 'PATRIMONIO', 'INGRESO', 'GASTO'];
  
  accountSummaries: AccountSummary[] = [
    {
      type: 'ACTIVOS',
      total: 1250000,
      count: 45,
      change: 8.5,
      icon: '💎',
      color: '#10B981'
    },
    {
      type: 'PASIVOS',
      total: 580000,
      count: 28,
      change: -3.2,
      icon: '📋',
      color: '#EF4444'
    },
    {
      type: 'PATRIMONIO',
      total: 670000,
      count: 12,
      change: 15.7,
      icon: '🏛️',
      color: '#6366F1'
    },
    {
      type: 'INGRESOS',
      total: 890000,
      count: 35,
      change: 12.3,
      icon: '💰',
      color: '#F59E0B'
    }
  ];

  accounts: Account[] = [
    // ACTIVOS
    {
      id: '1',
      code: '1',
      name: 'ACTIVOS',
      type: 'ACTIVO',
      level: 1,
      balance: 1250000,
      expanded: true,
      hasChildren: true,
      children: [
        {
          id: '11',
          code: '11',
          name: 'ACTIVOS CORRIENTES',
          type: 'ACTIVO',
          level: 2,
          parent: '1',
          balance: 850000,
          expanded: true,
          hasChildren: true,
          children: [
            {
              id: '111',
              code: '1101',
              name: 'Caja y Bancos',
              type: 'ACTIVO',
              level: 3,
              parent: '11',
              balance: 125000,
              hasChildren: true,
              children: [
                {
                  id: '1111',
                  code: '110101',
                  name: 'Caja General',
                  type: 'ACTIVO',
                  level: 4,
                  parent: '111',
                  balance: 15000,
                  hasChildren: false
                },
                {
                  id: '1112',
                  code: '110102',
                  name: 'Banco Nacional',
                  type: 'ACTIVO',
                  level: 4,
                  parent: '111',
                  balance: 85000,
                  hasChildren: false
                },
                {
                  id: '1113',
                  code: '110103',
                  name: 'Banco Internacional',
                  type: 'ACTIVO',
                  level: 4,
                  parent: '111',
                  balance: 25000,
                  hasChildren: false
                }
              ]
            },
            {
              id: '112',
              code: '1105',
              name: 'Cuentas por Cobrar',
              type: 'ACTIVO',
              level: 3,
              parent: '11',
              balance: 350000,
              hasChildren: true,
              children: [
                {
                  id: '1121',
                  code: '110501',
                  name: 'Clientes Nacionales',
                  type: 'ACTIVO',
                  level: 4,
                  parent: '112',
                  balance: 280000,
                  hasChildren: false
                },
                {
                  id: '1122',
                  code: '110502',
                  name: 'Clientes Extranjeros',
                  type: 'ACTIVO',
                  level: 4,
                  parent: '112',
                  balance: 70000,
                  hasChildren: false
                }
              ]
            },
            {
              id: '113',
              code: '1110',
              name: 'Inventarios',
              type: 'ACTIVO',
              level: 3,
              parent: '11',
              balance: 375000,
              hasChildren: false
            }
          ]
        },
        {
          id: '12',
          code: '12',
          name: 'ACTIVOS NO CORRIENTES',
          type: 'ACTIVO',
          level: 2,
          parent: '1',
          balance: 400000,
          hasChildren: true,
          children: [
            {
              id: '121',
              code: '1205',
              name: 'Propiedad, Planta y Equipo',
              type: 'ACTIVO',
              level: 3,
              parent: '12',
              balance: 400000,
              hasChildren: false
            }
          ]
        }
      ]
    },
    // PASIVOS
    {
      id: '2',
      code: '2',
      name: 'PASIVOS',
      type: 'PASIVO',
      level: 1,
      balance: 580000,
      expanded: true,
      hasChildren: true,
      children: [
        {
          id: '21',
          code: '21',
          name: 'PASIVOS CORRIENTES',
          type: 'PASIVO',
          level: 2,
          parent: '2',
          balance: 380000,
          hasChildren: true,
          children: [
            {
              id: '211',
              code: '2105',
              name: 'Cuentas por Pagar',
              type: 'PASIVO',
              level: 3,
              parent: '21',
              balance: 220000,
              hasChildren: false
            },
            {
              id: '212',
              code: '2110',
              name: 'Obligaciones Laborales',
              type: 'PASIVO',
              level: 3,
              parent: '21',
              balance: 160000,
              hasChildren: false
            }
          ]
        },
        {
          id: '22',
          code: '22',
          name: 'PASIVOS NO CORRIENTES',
          type: 'PASIVO',
          level: 2,
          parent: '2',
          balance: 200000,
          hasChildren: true,
          children: [
            {
              id: '221',
              code: '2205',
              name: 'Préstamos Bancarios L.P.',
              type: 'PASIVO',
              level: 3,
              parent: '22',
              balance: 200000,
              hasChildren: false
            }
          ]
        }
      ]
    },
    // PATRIMONIO
    {
      id: '3',
      code: '3',
      name: 'PATRIMONIO',
      type: 'PATRIMONIO',
      level: 1,
      balance: 670000,
      hasChildren: true,
      children: [
        {
          id: '31',
          code: '3105',
          name: 'Capital Social',
          type: 'PATRIMONIO',
          level: 2,
          parent: '3',
          balance: 500000,
          hasChildren: false
        },
        {
          id: '32',
          code: '3110',
          name: 'Utilidades Retenidas',
          type: 'PATRIMONIO',
          level: 2,
          parent: '3',
          balance: 170000,
          hasChildren: false
        }
      ]
    },
    // INGRESOS
    {
      id: '4',
      code: '4',
      name: 'INGRESOS',
      type: 'INGRESO',
      level: 1,
      balance: 890000,
      hasChildren: true,
      children: [
        {
          id: '41',
          code: '4105',
          name: 'Ingresos Operacionales',
          type: 'INGRESO',
          level: 2,
          parent: '4',
          balance: 750000,
          hasChildren: false
        },
        {
          id: '42',
          code: '4110',
          name: 'Ingresos No Operacionales',
          type: 'INGRESO',
          level: 2,
          parent: '4',
          balance: 140000,
          hasChildren: false
        }
      ]
    },
    // GASTOS
    {
      id: '5',
      code: '5',
      name: 'GASTOS',
      type: 'GASTO',
      level: 1,
      balance: 520000,
      hasChildren: true,
      children: [
        {
          id: '51',
          code: '5105',
          name: 'Gastos Operacionales',
          type: 'GASTO',
          level: 2,
          parent: '5',
          balance: 450000,
          hasChildren: false
        },
        {
          id: '52',
          code: '5110',
          name: 'Gastos Financieros',
          type: 'GASTO',
          level: 2,
          parent: '5',
          balance: 70000,
          hasChildren: false
        }
      ]
    }
  ];

  newAccount: Partial<Account> = {
    code: '',
    name: '',
    type: 'ACTIVO',
    level: 1,
    balance: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    // Aquí cargarías los datos desde tu servicio
    console.log('Cargando plan de cuentas...');
  }

  get filteredAccounts(): Account[] {
    let filtered = this.accounts;
    
    if (this.selectedType !== 'TODOS') {
      filtered = filtered.filter(account => account.type === this.selectedType);
    }
    
    if (this.searchTerm) {
      filtered = this.filterAccountsBySearch(filtered, this.searchTerm);
    }
    
    return filtered;
  }

  private filterAccountsBySearch(accounts: Account[], term: string): Account[] {
    return accounts.filter(account => {
      const matchesSearch = account.name.toLowerCase().includes(term.toLowerCase()) ||
                           account.code.includes(term);
      
      if (matchesSearch) return true;
      
      if (account.children) {
        const filteredChildren = this.filterAccountsBySearch(account.children, term);
        return filteredChildren.length > 0;
      }
      
      return false;
    }).map(account => {
      if (account.children) {
        return {
          ...account,
          children: this.filterAccountsBySearch(account.children, term)
        };
      }
      return account;
    });
  }

  toggleAccount(account: Account): void {
    if (account.hasChildren) {
      account.expanded = !account.expanded;
    }
  }

  selectAccount(account: Account): void {
    this.selectedAccount = this.selectedAccount?.id === account.id ? null : account;
  }

  openAddModal(): void {
    this.showAddModal = true;
    this.newAccount = {
      code: '',
      name: '',
      type: 'ACTIVO',
      level: 1,
      balance: 0
    };
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.newAccount = {};
  }

  saveAccount(): void {
    if (this.newAccount.code && this.newAccount.name) {
      const account: Account = {
        id: Date.now().toString(),
        code: this.newAccount.code,
        name: this.newAccount.name,
        type: this.newAccount.type || 'ACTIVO',
        level: this.newAccount.level || 1,
        balance: this.newAccount.balance || 0,
        hasChildren: false
      };
      
      // Aquí agregarías la cuenta al array o enviarías al backend
      console.log('Guardando cuenta:', account);
      this.closeAddModal();
    }
  }

  deleteAccount(account: Account): void {
    if (confirm(`¿Estás seguro de eliminar la cuenta ${account.name}?`)) {
      // Aquí eliminarías la cuenta
      console.log('Eliminando cuenta:', account);
    }
  }

  editAccount(account: Account): void {
    this.selectedAccount = account;
    this.newAccount = { ...account };
    this.showAddModal = true;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  }

  getAccountTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'ACTIVO': '#10B981',
      'PASIVO': '#EF4444',
      'PATRIMONIO': '#6366F1',
      'INGRESO': '#F59E0B',
      'GASTO': '#EC4899'
    };
    return colors[type] || '#6B7280';
  }

  exportAccounts(): void {
    // Implementar exportación a Excel/PDF
    console.log('Exportando plan de cuentas...');
  }

  importAccounts(): void {
    // Implementar importación desde Excel
    console.log('Importando plan de cuentas...');
  }
}
