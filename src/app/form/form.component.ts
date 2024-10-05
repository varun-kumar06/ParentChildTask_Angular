import { Component, EventEmitter, Output } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() out= new EventEmitter<Bike> ();

  model: string;
  brand: string;
  price: number;
  
  bike:Bike;
  

  submit() {
    this.bike = new Bike(this.model, this.brand, this.price);
    this.out.emit(this.bike);
    
  }
}

