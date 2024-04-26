import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  cloneCar() {
    return new Car();
  }
}
export default EVCar;
