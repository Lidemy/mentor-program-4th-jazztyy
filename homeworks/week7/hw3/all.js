const input = document.querySelector('.input');
const search = document.querySelector('.searchData');
const toToList = document.querySelector('.ToDoList');
const inputData = document.querySelector('.data');
let editSwitch = false;
const data = [];

function showData(e) {
  const str = [];
  const { length } = e;
  const total = document.querySelector('.total');
  e.forEach((element, i) => {
    const text = `
        <li class="ToDoListContent">
        <input class="check" type="checkbox">    
        <div>
            <a href="#" class="moveUp" style="background-image: url(./img/arrow_upward-24px.svg);" data-num="${i}"></a>
            <a href="#" class="moveDown" style="background-image: url(./img/arrow_downward-24px.svg);" data-num="${i}"></a></div>
            <span>${element.data}</span>
            <div><a href="#" class="modify" data-num="${i}">修改</a>
            <a href="#" class="delete" data-num="${i}">刪除</a></div>
        </li>`;
    str.push(text);
  });
  toToList.innerHTML = str.join('');
  inputData.value = '';
  total.textContent = length;
  // eslint-disable-next-line no-use-before-define
  toToList.addEventListener('click', judgeEvent);
  editSwitch = false;
}

function getData() {
  const inputDataValue = inputData.value;
  if (inputDataValue === '') {
    return;
  }
  const obj = {
    data: inputDataValue,
  };
  data.push(obj);
  showData(data);
}

function keyDown(e) {
  if (e.keyCode === 13) {
    getData();
  }
}

function deleteData(e) {
  data.forEach((element, i) => {
    if (i === Number(e.target.dataset.num)) {
      data.splice(i, 1);
    }
  });
  showData(data);
}


function storageData() {
  const modifyData = document.querySelector('.modifyData');
  const editDataValue = {
    data: modifyData.value,
  };
  const dataNum = Number(modifyData.dataset.num);
  data.splice(dataNum, 1, editDataValue);
  showData(data);
}

function editData(e) {
  editSwitch = true;
  data.forEach((element, i) => {
    if (Number(e.target.dataset.num) === i) {
      const text = `
            <input class="check" type="checkbox">    
            <div>
            <a href="#" class="moveUp" style="background-image: url(./img/arrow_upward-24px.svg);" data-num="${i}"></a>
            <a href="#" class="moveDown" style="background-image: url(./img/arrow_downward-24px.svg);" data-num="${i}"></a></div>

            <input class="modifyData" type="text" data-num="${i}" value="${element.data}">

            <div><a href="#" class="storage" data-num="${i}">儲存</a>
            <a href="#" class="delete" data-num="${i}">刪除</a></div>`;
      e.target.parentNode.parentNode.innerHTML = text;
    }
  });
}


function searchData(e) {
  const searchDataList = [];
  data.forEach((element) => {
    if (element.data.indexOf(e.target.value) >= 0) {
      searchDataList.push(element);
    }
  });
  showData(searchDataList);
}

function moveUpData(e) {
  if (data.length < 2) {
    return;
  }
  data.forEach((element, i) => {
    if (i === 0) {
      return;
    }
    if (i === Number(e.target.dataset.num)) {
      data.splice(i, 1, data[i - 1]);
      data.splice(i - 1, 1, element);
      showData(data);
    }
  });
}

function moveDownData(e) {
  if (data.length < 2) {
    return;
  }
  data.forEach((element, i) => {
    if (i === data.length - 1) {
      return;
    }
    if (i === Number(e.target.dataset.num)) {
      data.splice(i, 1, data[i + 1]);
      data.splice(i + 1, 1, element);
      showData(data);
    }
  });
}

function judgeEvent(e) {
  switch (e.target.classList.value) {
    case 'delete':
      deleteData(e);
      break;
    case 'modify':
      if (editSwitch === false) {
        editData(e);
      } else {
        storageData(e);
      }
      break;
    case 'moveUp':
      moveUpData(e);
      break;
    case 'moveDown':
      moveDownData(e);
      break;
    case 'storage':
      storageData(e);
      break;
    default:
  }
}

search.addEventListener('input', searchData);
input.addEventListener('click', getData);
inputData.addEventListener('keydown', keyDown);
