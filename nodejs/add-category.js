const fs = require('fs');
const { parse } = require('csv-parse');

const filePath = './nodejs/test-file.csv';

const csvParser = parse(
  {
    columns: true
  }
);

const result = [];
const headers = [];

fs.createReadStream(filePath)
  .pipe(csvParser)
  .on('data', (row) => {
    result.push(row);
  })
  .on('headers', (data) => {
    headers = data;
  })
  .on('error', (error) => {
    console.log(error);
  })
  .on('end', processData);


function processData() {
  console.log(result.length);
  console.log(result[0]);
}
