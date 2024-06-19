const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const PORT = 1245;
const databasePath = process.argv[2];
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (reqUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    fs.readFile(databasePath, 'utf-8')
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

        // Construct the response
        res.writeHead(200);
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${numberOfStudents}\n`);
        res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
        res.end(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
      })
      .catch((error) => {
        res.writeHead(500);
        res.end(`Cannot load the database: ${error.message}\n`);
      });
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
module.exports = app;
