import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './firstTest/data.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Define a users property to hold our user data
  users = 'String';
  title : String;
  hero = 'Windstorm';

}
