import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({  
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './plus-action.component.html',
  styleUrl: './plus-action.component.css'
})
export class PlusActionComponent implements ICellRendererAngularComp{
  public value!: string;

  agInit(params: ICellRendererParams<any, any, any>): void {    
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {    
    return true;
  }

  click() {console.log("click:", this.value)}

}
