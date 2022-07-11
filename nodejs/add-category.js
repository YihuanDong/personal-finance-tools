const fs = require('fs');
const csvParser = require('csv-parser');
const CATEGORY = require('./category-mapping').CATEGORY;
const AUTO_PAYMENT = require('./auto-payment-mapping').AUTO_PAYMENT;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const inputFilePath = './csv/Spending Tracking 2022 Raw Data Compilation - 1st quarter.csv';
const outputFilePath = './csv/Spending Tracking 2022 - 1st quarter.csv';


(function main() {
  const data = [];
  const headers = [];

  fs.createReadStream(inputFilePath)
    .pipe(csvParser())
    .on('data', (row) => {
      data.push(row);
    })
    .on('headers', (row) => {
      headers.push(...row);
    })
    .on('error', (error) => {
      console.err(error);
    })
    .on('end', processData);

  function processData() {
    console.log(data.length);
    console.log(headers);

    // step 1: clean data
    const cleanedData = cleanData(data);

    // step 2: categorize data
    categorizeData(cleanedData, headers);

    // console.log(cleanedData);
    console.log(headers);
    // Output data to a csv file
    writeDataToCsv(cleanedData, headers, outputFilePath);
  }

})();


/**
 * Write an array of data with headers into a csv file using the given outputFilePath.
 * 
 * @param {Object} data data
 * @param {Array} headers headers
 * @param {String} outputFilePath output file path
 */
function writeDataToCsv(data, headers, outputFilePath) {
  createCsvWriter({
    header: headers,
    path: outputFilePath
  })
    .writeRecords(data);
}

function categorizeData(data, headers) {
  headers.push('Category');
  data.forEach((entry) => {
    entry.Category = '';
    for (const category of Object.values(CATEGORY)) {
      if (category.validate(entry.lowerCaseDescription)) {
        entry.Category = category.name;
        break;
      }
    }
  });
}

function cleanData(data) {
  let cleanedData = data;

  // step 1: turn description to lower case;
  descriptionToLowerCase(cleanedData);

  // step 2: filter out autopayment rows;
  cleanedData = filterAutoPayment(cleanedData);

  return cleanedData;
}

function descriptionToLowerCase(data) {
  data.forEach((element) => element.lowerCaseDescription = element.Description.toLowerCase());
}

function filterAutoPayment(data) {
  function isAutoPayment(description) {
    for (const bank of Object.values(AUTO_PAYMENT)) {
      if (bank.validate(description)) {
        return true;
      }
    }

    return false;
  }

  const filteredData = data.filter((entry) => !isAutoPayment(entry.lowerCaseDescription));

  return filteredData;
}




