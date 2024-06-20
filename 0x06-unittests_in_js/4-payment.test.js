const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use stubbed Utils.calculateNumber with SUM and correct arguments, and log the correct message', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
