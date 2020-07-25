## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. <figure>：用在引用的圖片、插圖、表格等，會搭配 <figcaption> 作為圖片說明使用，常用的架構為 <figure><img><figcaption></figcaption></figure>
2. <blockquote>：引用內容，會產生一個引用的區塊。
3. <mark>：會使特定文字呈現高亮的效果。

#### 資料來源：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

## 請問什麼是盒模型（box modal）

CSS 盒模型即 HTML 元素經瀏覽器渲染後形成的一個盒子，其內容包含了 element(內容)、padding (內邊距)、border (邊框)、margin (外邊距)。

1. margin：設定與外部元素的距離，可控制元素在頁面中的位置。可設置四邊距離，如 `margin: 2px 3px 4px 5px`;，依序為上、右、下、左；`margin: 2px 3px 4px;`，依序為上、左右、下；`margin: 2px 3px;`，依序為上下、左右；`margin: 2px;`，四邊。

2. padding：設定與內部內容的距離，可控制內容與邊框的位置。可設置四邊距離，如 padding: `2px 3px 4px 5px`;，依序為上、右、下、左；`padding: 2px 3px 4px`;，依序為上、左右、下；`padding: 2px 3px`;，依序為上下、左右；`padding: 2px`;，四邊。

3. border：元素的邊框，可設置邊框粗細、形式及顏色。

### 盒模型的類型：

- content-box： 為一般的預設值，其真正的寬高為 content + padding + border + margin。
![](https://i.imgur.com/OrVh4ko.png)

- border-box：為 IE 盒子模型，其真正的寬高為 content (含 border, padding) + margin，即 content 的長寬不變，而設置 border, padding 時會自動計算並改變 content (不含 border, padding)，使其符合設置的寬高。
![](https://i.imgur.com/o0qejb0.png)
#### 參考來源：[盒模型介紹](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)、[CSS盒模型](https://zhuanlan.zhihu.com/p/74817089)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. inline：表示為行內元素，與區塊元素不同，不會自動延伸占據整個區塊，因此在寬度允許下，行內元素可以並排，其寬高以內容文字為參考，可使用 padding 及 margin 撐開，但 margin 的 top, bottom 無效。常見的元素有：a, span 等。

2. block：為塊級元素的一種，會自動換行，能設置寬高，可使用 padding, margin 的所有功能。常見的元素有：div, p, h1-h6, ul, li 等。

3. inline-block：擁有行內及區塊兩種特性的元素，可設置寬高、及 padding 跟 margin，不會自動換行，也就是說可以將元素進行並排。

4. img, input, textarea 為比較特殊的元素，雖然看起來是 inline 但卻可以設置寬跟高，實際上為一種特殊的替換元素，瀏覽器會根據元素的標籤跟屬性來決定換成什麼東西。

#### 參考來源： [替換元素](https://www.itread01.com/content/1550541251.html) [行內與區塊](https://ithelp.ithome.com.tw/articles/10199554)

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. position: static; 為預設值，不會被特別定位，會依照瀏覽器預設的配置自動排版。
2. position: relative (相對定位)： 不會被特別定位，可加上 top, right, left, bottom 使其相對於其原本的位置產生位移，而不會影響到其他元素，**原有的位置會被保留**。
3. position: fixed (固定定位)：會相對於瀏覽器視窗定位，同樣可使用 top, right, left, bottom 來進行定位，不會影響到其他元素，但**原有的位置不會保留**。
4. position: absolute (絕對定位)：會相對於上層第一個 非 static 的元素位置作為定位，可加上 top, right, left, bottom 使其相對於其原本的位置產生位移，而不會影響到其他元素，**原有的位置不會被保留**。

#### 參考來源： [學習 CSS 版面配置](https://zh-tw.learnlayout.com/position.html)

#### 額外分享一個在前端社團看到的用畫圖呈現的 CSS 觀念的圖 [CSS 觀念圖畫版](https://www.facebook.com/photo.php?fbid=3410303645647950&set=pcb.3068945923142752&type=3&theater&ifg=1)