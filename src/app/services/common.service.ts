import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private message = 'Hello from the Service';

  getMessage() {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }
}
