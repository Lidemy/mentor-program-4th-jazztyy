## 請以自己的話解釋 API 是什麼

先呼叫萬能的維基來解釋一下，什麼是 API。英語：Application Programming Interface，縮寫：API；又稱為應用程式編譯介面。

前面的部分看不懂沒關係，只要知道它是個介面就可以了，就跟之前學習 CLI 跟 GUI 一樣都是屬於一種介面，一種是利用文字傳遞，另一種則是利用圖形。

同樣的地方就是，我們都藉由這個介面去傳遞我們的需求，然後它就會幫我們去跟相關的程式，傳達我們的訊息，接著再把回饋回傳給我們。

如果用信件比喻，我寄信 (提出需求)，寄件目的地則是接收的地方，郵差就是 API；
用餐廳來比喻，我點餐 (提出需求)，後台廚房就是接收的地方，那服務生就是 API；
用販賣機來比喻，我點取 (提出需求)，販賣機內部就是接收的地方，那販賣機的介面就是 API。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

### 主要分類

- 資訊回應 (Informational responses, 100–199),
- 成功回應 (Successful responses, 200–299),
- 重定向 (Redirects, 300–399),
- 用戶端錯誤 (Client errors, 400–499),
- 伺服器端錯誤 (Server errors, 500–599).


1. 429：表示在限制的時間內，發出太多的請求。
2. 401：未授權，需要 token 或是提供必要資訊。
3. 403：用戶端無權訪問，跟 401 有些許差異，伺服器知道用戶端的身分。

[覺得很有趣，分享一下胡立大大的舊文章，關於 418](https://blog.techbridge.cc/2019/06/15/iam-a-teapot-418/)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。



### API: https://restaurant-loaction-api


- 回傳所有餐廳資料
    ```js 
  GET  {API}/{uid}/restaurants 
    ```
- 回傳單一餐廳資料
    ```js
  GET {API}/{uid}/restaurant/{id}
    ```
- 刪除單一餐廳資料
    ```js
  DELETE {API}/{uid}/restaurant/{id}
    ```

URL Parameter
Parameter | Status | Description
---------|----------|---------
 `id` | required | Restaurant ID
 `uid` | required | Your ID

- 新增餐廳資料
    ```js
  POST {API}/{uid}/restaurant/{id}
  
    {
      "name":"string",
      "tel":"string",
      "location":"string",
      "menu":"array"
    }
    ```
URL Parameter
Parameter | Status | Description
---------|----------|---------
 `id` | required | Restaurant ID
 `uid` | required | Your ID

Body Parameter
Parameter | Type   |Status   | Description
--------- |--------|---------|---------
 `name`   | string |required | Restaurant Name
 `tel`    | string |required | Restaurant Telephone
`location`|string  |required | Restautant Location
`menu`    |array   |required | Restautant Menu


- 更改餐廳資料
    ```js
  PATCH {API}/{uid}/restaurant/{id}
  
    {
      "name":"string",
      "tel":"string",
      "location":"string",
      "menu":"array"
    }
    ```
URL Parameter
Parameter | Status | Description
---------|----------|---------
 `id` | required | Restaurant ID
 `uid` | required | Your ID

Body Parameter
Parameter | Type   |Status   | Description
--------- |--------|---------|---------
 `name`   | string |optional | Restaurant Name
 `tel`    | string |optional | Restaurant Telephone
`location`|string  |optional | Restautant Location
`menu`    |array   |optional | Restautant Menu