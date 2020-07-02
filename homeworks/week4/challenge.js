const request = require('request');
const process = require('process');

// 參數蠻多都是個人資料，所以就用變數代替惹，clientSecret, clientId, redirectUri 要帶入自己的。

const clientSecret = 'clientSecret';
const clientId = 'clientId';
const redirectUri = 'redirectUri';
const gameName = process.argv[2];

// 取得超過 100 份的部分
function getMoreStreamList(gameId, cursor, token, ans) {
  request({
    url: `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=100&after=${cursor}`,
    headers: {
      'Client-ID': 'i3553zoaibdj4v3lfpsuwaj32cljj4',
      Authorization: `Bearer ${token}`,
    },
  }, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const streamerData = JSON.parse(body).data;
    streamerData.forEach(streamer => ans.push(streamer));
    ans.forEach(streamer => console.log(`${streamer.user_id} ${streamer.user_name} ${streamer.title}`));
    return true;
  });
}

// 取得實況遊戲列表
function getStreamList(gameId, token) {
  request({
    url: `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=100`,
    headers: {
      'Client-ID': 'i3553zoaibdj4v3lfpsuwaj32cljj4',
      Authorization: `Bearer ${token}`,
    },
  }, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const ans = [];
    // cursor 為後續資料接續開始的位置
    const cursor = `${JSON.parse(body).pagination.cursor}`;
    const streamerData = JSON.parse(body).data;
    if (streamerData.length < 100) {
      streamerData.forEach(streamer => console.log(`${streamer.user_id} ${streamer.user_name} ${streamer.title}`));
    } else {
    // 實況列表超過 100
      streamerData.forEach(streamer => ans.push(streamer));
      getMoreStreamList(gameId, cursor, token, ans);
    }
    return true;
  });
}

// 取得 遊戲的 id
function getGameId(token) {
  request({
    url: `https://api.twitch.tv/helix/games?name=${gameName}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-ID': clientId,
    },
  }, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const gameId = JSON.parse(body).data[0].id;
    getStreamList(gameId, token);
    return true;
  });
}
// 取得 access token
request.post({
  url: `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials&redirect_uri=${redirectUri}`,
}, (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  const token = JSON.parse(body).access_token;
  getGameId(token);
  return true;
});

// 整體流程： 取得 access token => 用 token 取得遊戲的 id => 用遊戲 id 去找實況列表 => 超過 100 的話就到下個函式繼續。
