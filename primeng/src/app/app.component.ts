import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PrimeNGConfig } from 'primeng/api';

import ptBrTranslations from 'primelocale/pt-br.json'; 



@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, TableModule, HttpClientModule, CommonModule, InputTextModule, TagModule, 
            DropdownModule, MultiSelectModule, ProgressBarModule, ButtonModule, SliderModule, FormsModule, ContextMenuModule, 
            ],
  providers: [CustomerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  customers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;

  constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.setTranslation(ptBrTranslations['pt-br']);    


    this.customerService.getCustomersLarge().then((customers) => {
        this.customers = customers;
        this.loading = false;

        this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    });

    this.representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
        { label: 'Unqualified', value: 'unqualified' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'New', value: 'new' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Renewal', value: 'renewal' },
        { label: 'Proposal', value: 'proposal' }
    ];
  }

  clear(table: Table) {
      table.clear();
      this.searchValue = ''
  }

  getSeverity(status: string) {
      switch (status.toLowerCase()) {
          case 'unqualified': return 'danger';
          case 'qualified': return 'success';
          case 'new': return 'info';
          case 'negotiation': return 'warning';
          case 'renewal': return undefined;
          default: return undefined;
      }
  }

  getValueEvent(event: Event) {    
    const value = Number((event.target as HTMLInputElement).value);
    return value;
  }

 
}
