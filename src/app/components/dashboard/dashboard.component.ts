import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunicationComponent } from "../communication/communication.component";
import { CommonService } from '../../services/common.service';
import { LifecycleHooksComponent } from "../lifecycle-hooks/lifecycle-hooks.component";

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommunicationComponent, LifecycleHooksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Angular Assignments';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  count = 0;
  name: string = '';
  messages: string = 'Initial Data';
  
  @ViewChild(CommunicationComponent) communication!: CommunicationComponent;
  message: string;

  constructor(private commonService: CommonService) {
    this.message = this.commonService.getMessage();
  }

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }

  onNameChange(newName: string) {
    console.log('Name changed to:', newName);
  }

  public messageFromParent = 'Hello from Parent Component';
  public receivedMessage!: string;

  receiveMessage(event: string) {
    this.receivedMessage = event;
  }

  callChildMethod() {
    this.communication.sayHello();
  }

  /* Added for service */
  changeMessage() {
    this.commonService.setMessage('New Message from dashboard component');
    this.message = this.commonService.getMessage();
    console.log(this.message)
  }

  changeData() {
    this.messages = 'Updated Data';
  }
}
