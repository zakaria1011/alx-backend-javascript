const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1).map((line) => line.split(','));
        const numberOfStudents = students.length;
        console.log(`Number of students: ${numberOfStudents}`);

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

        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
