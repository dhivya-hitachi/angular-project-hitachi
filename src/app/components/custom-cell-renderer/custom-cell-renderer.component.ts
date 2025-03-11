import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-custom-cell-renderer',
  imports: [AgGridModule],
  templateUrl: './custom-cell-renderer.component.html',
  styleUrl: './custom-cell-renderer.component.css'
})
export class CustomCellRendererComponent {
  data: any;
  params: any;

  agInit(params: any): void {
    this.params = params.value;
  }
}
