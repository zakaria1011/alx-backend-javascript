const cloneCarSymbole = Symbol('cloneCar');
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbole]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneCarSymbole]();
  }
}
export default Car;
