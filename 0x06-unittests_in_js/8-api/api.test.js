const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

describe('index page', () => {
  let server;
  before((done) => {
    server = require('./api');
    setTimeout(done, 1000);
  });
  after(() => {
    server.close();
  });
  it('correct status code?', () => new Promise((done) => {
    request('http://localhost:7865', (_, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));
  it('correct result', () => new Promise((done) => {
    request('http://localhost:7865', (_, __, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
