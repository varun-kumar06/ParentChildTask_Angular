import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  bikes: Bike[] = [];
  
  out(bike: Bike) {
    
    this.bikes.push(bike); 
}
  
}