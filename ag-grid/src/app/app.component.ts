import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AgGridAngular, } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { AG_GRID_LOCALE_BR } from '@ag-grid-community/locale';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';


import { PlusActionComponent } from './plus-action/plus-action.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  LOCALE_BR = AG_GRID_LOCALE_BR;
  PAGINATION = true;
  PAGINATION_PAGE_SIZE = 10;

  // Row Data: The data to be displayed.
  rowData = [
    { data: "12/06/2024 09:22", paciente: "Helio Matos", solicitante: "Anderson da Silva", resultado: "25/06/2024", status: StatusEnum.COLETA },
    { data: "12/06/2024 08:15", paciente: "Marcio da Silva", solicitante: "Jorge Neto", resultado: "25/06/2024", status: StatusEnum.COLETANDO },
    { data: "12/06/2024 07:55", paciente: "Joana Maria", solicitante: "Gustavo Pereira", resultado: "28/06/2024", status: StatusEnum.COLETADO },
    { data: "12/06/2024 06:46", paciente: "João Rodrigues", solicitante: "Anderson da Silva", resultado: "25/06/2024", status: StatusEnum.COLETADO },
    { data: "05/03/2024 09:15", paciente: "Maria Oliveira", solicitante: "Carlos Ferreira", resultado: "19/03/2024", status: StatusEnum.COLETADO },
    { data: "07/08/2024 11:30", paciente: "Pedro Silva", solicitante: "Ana Martins", resultado: "21/08/2024", status: StatusEnum.COLETADO },
    { data: "14/01/2024 08:45", paciente: "Clara Souza", solicitante: "Lucas Lima", resultado: "28/01/2024", status: StatusEnum.COLETADO },
    { data: "20/04/2024 10:20", paciente: "Rafael Costa", solicitante: "Mariana Alves", resultado: "04/05/2024", status: StatusEnum.COLETADO },
    { data: "01/02/2024 07:55", paciente: "Gabriela Santos", solicitante: "Fernando Ribeiro", resultado: "15/02/2024", status: StatusEnum.COLETADO },
    { data: "19/07/2024 12:10", paciente: "Diego Pereira", solicitante: "Juliana Rodrigues", resultado: "02/08/2024", status: StatusEnum.COLETADO },
    { data: "09/11/2024 14:00", paciente: "Renata Almeida", solicitante: "André Costa", resultado: "23/11/2024", status: StatusEnum.COLETADO },
    { data: "17/03/2024 16:35", paciente: "Gustavo Barros", solicitante: "Camila Souza", resultado: "31/03/2024", status: StatusEnum.COLETADO },
    { data: "22/06/2024 06:50", paciente: "Laura Lima", solicitante: "Thiago Fernandes", resultado: "06/07/2024", status: StatusEnum.COLETADO },
    { data: "03/10/2024 09:40", paciente: "Bruno Cardoso", solicitante: "Patrícia Santos", resultado: "17/10/2024", status: StatusEnum.COLETADO },
    { data: "12/12/2024 11:25", paciente: "Alice Melo", solicitante: "Rodrigo Gonçalves", resultado: "26/12/2024", status: StatusEnum.COLETADO },
    { data: "28/08/2024 13:55", paciente: "Felipe Nascimento", solicitante: "Marcelo Araújo", resultado: "11/09/2024", status: StatusEnum.COLETADO },
    { data: "06/04/2024 08:30", paciente: "Aline Fernandes", solicitante: "Cristiano Vieira", resultado: "20/04/2024", status: StatusEnum.COLETADO },
    { data: "13/09/2024 15:20", paciente: "Matheus Lima", solicitante: "Lorena Ferreira", resultado: "27/09/2024", status: StatusEnum.COLETADO },
    { data: "24/05/2024 17:05", paciente: "Isabela Alves", solicitante: "Eduardo Pereira", resultado: "07/06/2024", status: StatusEnum.COLETADO },
    { data: "30/07/2024 07:10", paciente: "Henrique Costa", solicitante: "Bruna Oliveira", resultado: "13/08/2024", status: StatusEnum.COLETADO },
    { data: "15/11/2024 10:45", paciente: "Juliana Moreira", solicitante: "Ricardo Silva", resultado: "29/11/2024", status: StatusEnum.COLETADO },
    { data: "08/06/2024 09:00", paciente: "Vitor Campos", solicitante: "Vanessa Gomes", resultado: "22/06/2024", status: StatusEnum.COLETADO },
    { data: "26/01/2024 11:50", paciente: "Mariana Dias", solicitante: "Adriana Almeida", resultado: "09/02/2024", status: StatusEnum.COLETADO },
    { data: "14/04/2024 12:35", paciente: "Daniel Carvalho", solicitante: "Antonio Nunes", resultado: "28/04/2024", status: StatusEnum.COLETADO },
    { data: "18/09/2024 14:20", paciente: "Fernanda Monteiro", solicitante: "Renan Rodrigues", resultado: "02/10/2024", status: StatusEnum.COLETADO },
    { data: "25/12/2024 16:05", paciente: "Sofia Freitas", solicitante: "Bárbara Martins", resultado: "08/01/2025", status: StatusEnum.COLETADO },
    { data: "07/05/2024 06:50", paciente: "André Ramos", solicitante: "Beatriz Araújo", resultado: "21/05/2024", status: StatusEnum.COLETADO },
    { data: "11/10/2024 09:30", paciente: "Marcos Teixeira", solicitante: "Rafaela Pereira", resultado: "25/10/2024", status: StatusEnum.COLETADO },
    { data: "19/02/2024 11:15", paciente: "Ana Clara Cunha", solicitante: "Gustavo Ribeiro", resultado: "04/03/2024", status: StatusEnum.COLETADO },
    { data: "29/08/2024 13:00", paciente: "Lucas Batista", solicitante: "Natalia Lima", resultado: "12/09/2024", status: StatusEnum.COLETADO },
    { data: "22/11/2024 15:40", paciente: "Paula Vasconcelos", solicitante: "Danilo Fernandes", resultado: "06/12/2024", status: StatusEnum.COLETADO },
    { data: "30/03/2024 17:25", paciente: "Ricardo Machado", solicitante: "Claudia Oliveira", resultado: "13/04/2024", status: StatusEnum.COLETADO },
    { data: "05/07/2024 07:10", paciente: "Carla Mendes", solicitante: "Leonardo Gomes", resultado: "19/07/2024", status: StatusEnum.COLETADO },
    { data: "10/12/2024 10:55", paciente: "Thiago Barbosa", solicitante: "Renata Costa", resultado: "24/12/2024", status: StatusEnum.COLETADO }

  ];
  
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "acoes", headerName: "Ações", cellRenderer: PlusActionComponent, flex: 2},
    { field: "data", flex: 3, filter: true },
    { field: "paciente", flex: 4, filter: true },
    { field: "solicitante", flex: 3, filter: true },
    { field: "resultado", flex: 2, filter: true },
    { field: "status", flex: 2, filter: true }
  ];
 }


 export enum StatusEnum{
  COLETA = 'Coleta', 
  COLETANDO = 'Coletando', 
  COLETADO = 'Coletado'
 }