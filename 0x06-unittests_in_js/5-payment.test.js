const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
  });
  it('should log the correct total 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });
  it('should log the correct total 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
