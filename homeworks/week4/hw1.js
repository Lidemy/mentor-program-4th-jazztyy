const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      return console.log('無法抓取', error);
    }
    let data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      return console.log(err);
    }
    data.forEach(book => console.log(`${book.id} ${book.name}`));
    return true;
  },
);
