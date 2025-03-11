import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dependency-injection',
  imports: [CommonModule],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css',
})
export class DependencyInjectionComponent {
  data: string = '';
  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
    this.dataService.getUsers().subscribe((value) => {
      this.users = value;
      console.log('this.values =', this.users)
    });
  }
}
