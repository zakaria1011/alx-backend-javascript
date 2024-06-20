const express = require('express');

const app = express();

const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
module.exports = server;
