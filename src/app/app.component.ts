import { Component } from '@angular/core';
import { Customer, TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAng';
  helloWorld() {debugger
    alert('Hello world!');
}

// customers: Customer[];
//     constructor(service: TestServiceService) {
//         this.customers =  service.getCustomers();
//     }
}