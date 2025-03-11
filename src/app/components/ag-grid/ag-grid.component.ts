import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DependencyInjectionComponent } from '../dependency-injection/dependency-injection.component';
import { CustomCellRendererComponent } from '../custom-cell-renderer/custom-cell-renderer.component';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgGridComponent {
  columnDefs: ColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Custom Component',
      field: 'custom',
      cellRenderer: CustomCellRendererComponent,  // Reference the custom component
    }
  ];

  rowData = [
    { id: 1, name: 'Leanne Graham', custom: 'Custom data' },
    { id: 2, name: 'Ervin Howell', custom: 'Custom data' },
    { id: 3, name: 'Clementine Bauch', custom: 'Custom data' }
  ];

  // columnDefs = [
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' }
  // ];
  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
}
