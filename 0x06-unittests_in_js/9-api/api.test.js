const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the server

let app; // Variable to hold the server instance

describe('API tests', () => {
  before((done) => {
    // Start the server before tests and save the instance
    app = server.listen(7865, done);
  });

  after((done) => {
    // Close the server after tests are done
    app.close(done);
  });

  describe('index page', () => {
    it('correct status code?', (done) => {
      request('http://localhost:7865', (_, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('correct result', (done) => {
      request('http://localhost:7865', (_, __, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('cart page', () => {
    it('returns 200 for a valid cart id', (done) => {
      request('http://localhost:7865/cart/12', (_, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('returns 404 for an invalid cart id', (done) => {
      request('http://localhost:7865/cart/hello', (_, response, body) => {
        expect(response.statusCode).to.equal(404);
        expect(body).to.include('Not Found');
        done();
      });
    });
  });
});
