const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(1245, () => {
  console.log('Server is listening in port 1245');
});

module.exports = app;
