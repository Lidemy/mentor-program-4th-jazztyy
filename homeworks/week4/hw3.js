const request = require('request');
const process = require('process');

const search = process.argv[2];

request(
  `https://restcountries.eu/rest/v2/name/${search}`,
  (error, response, body) => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log('找不到國家資訊');
    }
    let data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      return console.log(err);
    }
    data = JSON.parse(body);
    data.forEach((country) => {
      console.log('============');
      console.log(`國家：${country.name}`);
      console.log(`貨幣: ${country.currencies[0].code}`);
      console.log(`國碼: ${country.callingCodes}`);
    });
    return true;
  },
);
