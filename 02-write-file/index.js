const fs = require('fs');
const path = require('path');
const readline = require('readline');


const fileName = 'output.txt';
const outputPath = path.join(__dirname, fileName);
const writableStream = fs.createWriteStream(outputPath, { flags: 'a' });


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Please enter text. Type "exit" or press Ctrl+C to quit.');

rl.on('line', (input) => {
  if (input.trim() === 'exit') {
    exitTyping();
  } else {
    writableStream.write(`${input}\n`, (err) => {
      if (err) console.error('Error writing to file:', err);
    });
  }
});

process.on('SIGINT', exitTyping);

function exitTyping() {
  console.log(`\nYour text was successfully written to the ${fileName} file.`);
  writableStream.end();
  rl.close();
  process.exit(0); 
}
