const express = require('express');
const fs = require('fs').promises;

const PORT = 1245;
const databasePath = process.argv[2];
const app = express();

// Middleware to set content type to plain text for all responses
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

// Function to count and categorize students from CSV data
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));
      const numberOfStudents = students.length;
      const csStudents = [];
      const sweStudents = [];

      students.forEach((student) => {
        const [firstname, , , field] = student;
        if (field === 'CS') {
          csStudents.push(firstname.trim());
        } else if (field === 'SWE') {
          sweStudents.push(firstname.trim());
        }
      });

      const result = 'This is the list of our students\n'
          + `Number of students: ${numberOfStudents}\n`
          + `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`
          + `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;

      resolve(result);
    })
    .catch((error) => {
      reject(new Error(`Cannot load the database: ${error.message}`));
    });
});

// Route for root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students path
app.get('/students', (req, res) => {
  if (!databasePath) {
    res.status(500).send('Database path is missing\n');
    return;
  }

  countStudents(databasePath)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;
