const request = require('request');

request({
  url: 'https://api.twitch.tv/kraken/games',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'i3553zoaibdj4v3lfpsuwaj32cljj4',
  },
}, (error, response, body) => {
  const data = JSON.parse(body).top;
  data.forEach(game => console.log(`${game.viewers} ${game.game.name}`));
});
