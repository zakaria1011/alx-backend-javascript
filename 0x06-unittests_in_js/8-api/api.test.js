const request = require('request');
const { expect } =  require('chai');
const { response } = require('express');

describe('index page', () => {
    let server;
    before((done) => {
        server = require('./api');
        setTimeout(done, 1000);
    });
    after(() => {
        server.close()
    });
    it('Correct status code?', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Correct result', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});