const request = require('request');
const process = require('process');

const input = process.argv[3];

function create() {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: {
      name: process.argv[3],
    },
  }, (error, response, body) => {
    console.log(body);
  });
}

function list() {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      if (error) {
        return console.log('無法抓取資料', error);
      }
      const data = JSON.parse(body);
      data.forEach(book => console.log(`${book.id} ${book.name}`));
      return true;
    },
  );
}

function read() {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${input}`,
    (error, response, body) => {
      if (error) {
        return console.log('無法抓取資料', error);
      }
      const data = JSON.parse(body);
      console.log(`${data.id} ${data.name}`);
      return true;
    },
  );
}

function deleteData() {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${input}`,
    (error, response, body) => {
      if (error) {
        return console.log('刪除失敗', error);
      }
      console.log(response.statusCode, body);
      return true;
    },
  );
}

function update() {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${input}`,
    form: {
      name: process.argv[4],
    },
  }, (error, response, body) => {
    if (error) {
      return console.log('修改資料失敗', error);
    }
    console.log(body);
    return true;
  });
}

switch (process.argv[2]) {
  case 'list':
    list();
    break;
  case 'read':
    read();
    break;
  case 'delete':
    deleteData();
    break;
  case 'create':
    create();
    break;
  case 'update':
    update();
    break;
  default:
}
