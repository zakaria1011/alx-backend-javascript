const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));
    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);
    const csStudents = [];
    const sweStudets = [];
    students.forEach((student) => {
      const [firstname, lastname, age, field] = student;
      if (field === 'CS') {
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweStudets.push(firstname);
      }
    });
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudets.length}. List: ${sweStudets.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
