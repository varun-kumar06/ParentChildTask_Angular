export class Bike {
  push(bike: Bike) {
    throw new Error('Method not implemented.');
  }
  model: String;
  brand: String;
  price: number;

  constructor( model:String, brand:String, price: number) {
    this.model = model;
    this.brand = brand;
    this.price = price;
  }
}
