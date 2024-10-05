import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
bikes: any;
onBikesUpdated($event: import("./bike").Bike[]) {
throw new Error('Method not implemented.');
}
  title = 'ParentChildTask';
}
