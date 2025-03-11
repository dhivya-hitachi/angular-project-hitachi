import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-communication',
  imports: [],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  @Input() parentData!: string;
  @Output() childEvent = new EventEmitter<string>();

  message: string;

  constructor(private commonService: CommonService) {
    this.message = this.commonService.getMessage();
  }
  sendMessageToParent() {
    this.childEvent.emit('Hello from Child');   
  }

  sayHello() {
    console.log('Hello from the Child Component viewchild');
  }
}
