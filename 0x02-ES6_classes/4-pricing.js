import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be a Currency');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw TypeError('conversion must be a number');
    }

    return amount * conversionRate;
  }
}
export default Pricing;
