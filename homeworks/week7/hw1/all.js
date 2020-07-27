/* eslint-disable no-useless-escape */
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const radio = document.querySelectorAll('.radio');
const message = {
  nickname: '',
  email: '',
  phone: '',
  howknow: '',
  gameType: '',
  advice: '',
};

function emailVerify(value, e) {
  const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (emailRule.test(value)) {
    e.target.parentNode.children[2].classList.add('hide');
    message.email = value;
  } else {
    e.target.parentNode.children[2].classList.remove('hide');
    message.email = '';
  }
}

function nullVerify(value, e) {
  if (value === '') {
    e.target.parentNode.children[2].classList.remove('hide');
    switch (e.target.className) {
      case 'nickname':
        message.nickname = '';
        break;
      case 'howknow':
        message.howknow = '';
        break;
      default:
    }
  } else {
    e.target.parentNode.children[2].classList.add('hide');
    switch (e.target.className) {
      case 'nickname':
        message.nickname = value;
        break;
      case 'howknow':
        message.howknow = value;
        break;
      default:
    }
  }
}

function phoneVerify(value, e) {
  const phoneRule = /^[09]{2}[0-9]{8}$/;
  if (phoneRule.test(value)) {
    e.target.parentNode.children[2].classList.add('hide');
    message.phone = value;
  } else {
    e.target.parentNode.children[2].classList.remove('hide');
    message.phone = '';
  }
}

function submit(e) {
  console.log(message);
  e.preventDefault();
  message.advice = document.querySelector('.advice').value;
  radio.forEach((el) => {
    if (el.checked) {
      message.gameType = el.parentNode.innerText;
    }
  });
  if (message.nickname === '' || message.gameType === '' || message.howknow === '' || message.email === '' || message.phone === '') {
    return;
  }
  console.log(message);
  alert(`輸入的資料為下
        暱稱：${message.nickname}
        電子郵件：${message.email}
        手機號碼：${message.phone}
        報名類型：${message.gameType}
        怎麼知道活動的：${message.howknow}
        其他：${message.advice}
        `);
}
function judge(e) {
  switch (e.target.className) {
    case 'email':
      emailVerify(e.target.value, e);
      break;
    case 'nickname':
      nullVerify(e.target.value, e);
      break;
    case 'phone':
      phoneVerify(e.target.value, e);
      break;
    case 'howknow':
      nullVerify(e.target.value, e);
      break;
    default:
  }
}

form.addEventListener('input', judge);
submitBtn.addEventListener('click', submit);
