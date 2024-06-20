const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the server instance

describe('index page', () => {
  let serverInstance;

  before((done) => {
    serverInstance = require('./api');
    setTimeout(done, 1000); // Corrected typo: setTimeout instead of settimeout
  });

  after(() => {
    serverInstance.close(); // Close the server after tests complete
  });

  it('correct status code?', () => new Promise((done) => { // Ensure done is passed to the test function
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done(); // Call done() to signal completion of the test
    });
  }));

  it('correct result', () => new Promise((done) => { // Ensure done is passed to the test function
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done(); // Call done() to signal completion of the test
    });
  }));
});
