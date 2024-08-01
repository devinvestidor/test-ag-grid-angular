
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { TableComponent } from './table/table.component';
import { TreetableComponent } from "./treetable/treetable.component";
import { SelectComponent } from "./select/select.component";
import { RowExpansionTableComponent } from "./row-expansion-table/row-expansion-table.component";



@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, TabViewModule, TableComponent, TreetableComponent, SelectComponent, RowExpansionTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  constructor() {}
}
