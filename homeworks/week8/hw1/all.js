/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-undef */
const API = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const mainPage = document.querySelector('main');
const lottery = document.querySelector('.lottery');

function renderPage(message) {
  mainPage.innerHTML = `
    <div class="prize">
        <h2>${message}</h2>
        <button class="drawBtn">我要抽獎</button>
    </div>
  `;
}
function getPrize(e) {
  if (e.target.nodeName === 'BUTTON') {
    axios.get(API).then((res) => {
      if (res.data.prize !== 'NONE') {
        mainPage.style.backgroundImage = `url('./img/${res.data.prize}.webp')`;
        switch (res.data.prize) {
          case 'FIRST':
            renderPage('恭喜你中頭獎了！日本東京來回雙人遊！');
            break;
          case 'SECOND':
            renderPage('二獎！90 吋電視一台！');
            break;
          case 'THIRD':
            renderPage('恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！');
            break;
          default:
        }
      } else {
        mainPage.innerHTML = `
            <div class="prize">
                <h2>銘謝惠顧</h2>
                <button class="drawBtn">我要抽獎</button>
            </div>
            `;
        mainPage.style.background = 'black no-repeat center/cover';
        mainPage.children[0].children[0].style.color = 'white';
      }
    }).catch(err => console.log(err));
  }
}

function showMadal() {
  mainPage.innerHTML = `
    <div class="content hide">
        <h2>2020 夏日輕盈特賞！ 抽獎活動辦法</h2>
        <ul>
            <li>
                <p>活動期間：</p>
                <span>2020/06/01~2020/07/01</span>
            </li>
            <li>
                <p>活動說明：</p>
                <span>今天老闆佛心來著決定給大家發獎勵，有看有機會，沒看只能幫QQ！只要在店內消費滿1000000元即有機會獲得 - 頭獎日本東京來回雙人遊！</span>
            </li>
            <li>
                <p>獎  品：</p>
                <span>❤頭獎一名：日本東京來回雙人遊 (市價14990元)
                <br>
                ❤貳獎三名：90 吋電視一台 (市價5990元) <br>
                ❤參獎十名：知名 YouTuber 簽名握手會入場券一張 (市價1500元)
            </span>
            </li>
        </ul>
        <button class="drawBtn">我要抽獎</button>
    </div>`;
  mainPage.style.backgroundImage = 'url(\'./img/background.jpg\')';
}

lottery.addEventListener('click', showMadal);
mainPage.addEventListener('click', getPrize);
