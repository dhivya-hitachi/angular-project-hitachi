import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DependencyInjectionComponent } from '../dependency-injection/dependency-injection.component';
import { CustomCellRendererComponent } from '../custom-cell-renderer/custom-cell-renderer.component';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgGridComponent {
  // columnDefs: ColDef[] = [
  //   {
  //     headerName: 'ID',
  //     field: 'id',
  //     sortable: true,
  //     filter: true
  //   },
  //   {
  //     headerName: 'Name',
  //     field: 'name',
  //     sortable: true,
  //     filter: true
  //   },
  //   {
  //     headerName: 'Custom Component',
  //     field: 'custom',
  //     cellRenderer: CustomCellRendererComponent,  // Reference the custom component
  //   }
  // ];

  // rowData = [
  //   { id: 1, name: 'Leanne Graham', custom: 'Custom data' },
  //   { id: 2, name: 'Ervin Howell', custom: 'Custom data' },
  //   { id: 3, name: 'Clementine Bauch', custom: 'Custom data' }
  // ];

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

  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
];

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
];
defaultColDef: ColDef = {
  flex: 1,
};
}
