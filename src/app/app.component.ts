import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DataService } from './services/data.service';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, AgGridModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-project';
}
