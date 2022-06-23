const fs = require('fs');
const csvParser = require('csv-parser');

const filePath = './nodejs/test-file.csv';
const records = [];
const headers = [];

fs.createReadStream(filePath)
  .pipe(csvParser())
  .on('data', (row) => {
    records.push(row);
  })
  .on('headers', (row) => {
    headers.push(...row);
  })
  .on('error', (error) => {
    console.err(error);
  })
  .on('end', processData);


function processData() {
  console.log(records.length);
  console.log(records[0]);
  console.log(headers);
}
