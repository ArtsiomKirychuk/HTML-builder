const fs = require('fs');
const path = require('path');


function readFile(filePath) {
  const readableStream = fs.createReadStream(filePath, 'utf-8');
  readableStream.on('error', (error) => {
    console.log(`error: ${error.message}`);
  });
  readableStream.on('data', (chunk) => {
    console.log(chunk);
  })
}


readFile(path.join(__dirname, 'text.txt'));

