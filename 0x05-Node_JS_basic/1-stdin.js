process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input.length > 0) {
    process.stdout.write(`Your name is: ${input}\n`);
  }
});
process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
