/* eslint-disable no-undef */
const API = 'https://api.twitch.tv/kraken/';
const id = 'i3553zoaibdj4v3lfpsuwaj32cljj4';
const accept = 'application/vnd.twitchtv.v5+json';
const data = {
  game: [],
  streams: [],
};
const topGameList = document.querySelector('.gameList');
const streamList = document.querySelector('.streamList');
const updata = document.querySelector('header');

function renderNav() {
  const gameList = [];
  data.game.forEach((game) => {
    const string = `
        <li><a href="">${game}</a></li>
    `;
    gameList.push(string);
  });
  topGameList.innerHTML = gameList.join('');
}

function renderStreamList() {
  const topStreamList = [];
  data.streams.forEach(((stream) => {
    const string = `
        <li>
            <a target='_blank' href="${stream.url}"></a>
            <img src="${stream.preview}" alt="">
                <div>
                    <img src="${stream.logo}"   alt="">
                <div>
                    <h2>${stream.name}</h2>
                    <p>${stream.status}</p>
                </div>
            </div>
        </li>
    `;
    topStreamList.push(string);
  }));
  streamList.innerHTML = topStreamList.join('');
}

function searchStreams(game) {
  data.streams = [];
  axios({
    method: 'get',
    url: `${API}streams?game=${game}&limit=20`,
    headers: {
      Accept: `${accept}`,
      'Client-ID': `${id}`,
    },
  }).then((res) => {
    const { streams } = res.data;
    streams.forEach((stream) => {
      data.streams.push({
        name: stream.channel.name,
        logo: stream.channel.logo,
        status: stream.channel.status,
        url: stream.channel.url,
        preview: stream.preview.medium,
      });
    });
    renderStreamList();
  });
}
function init() {
  data.game = [];
  axios({
    method: 'get',
    url: `${API}games/top?limit=6`,
    headers: {
      Accept: `${accept}`,
      'Client-ID': `${id}`,
    },
  }).then((res) => {
    const topGame = res.data.top;
    topGame.forEach((game) => {
      data.game.push(game.game.name);
    });
    console.log(data.game);
    searchStreams(data.game[0]);
    renderNav();
  });
}

function updataList(e) {
  e.preventDefault();
  if (e.target.nodeName === 'A') {
    searchStreams(e.target.text);
  } else if (e.target.nodeName === 'BUTTON') {
    init();
  }
}

init();

updata.addEventListener('click', updataList);
