## 什麼是 DOM？

DOM，中文翻譯是文件物件模型，英文全名是 Document Object ModelDOM，它提供了一個文件的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。
整體架構會像下圖一樣，像一顆樹的結構。

![](https://i.imgur.com/MVkL05o.png)

#### 資料來源：[MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)
 
## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

![](https://i.imgur.com/Fraa2Ab.png)

事件傳遞主要分為三個階段，依序為：
CAPTURING_PHASE (捕獲階段) 事件由根節點往下傳遞 
=> AT_TARGET (觸發事件) 事件傳遞到目標後觸發 
=> BUBBLING_PHASE (冒泡階段) 事件從子節點再傳回根節點。

#### 資料來源：[Huli 的文章](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

## 什麼是 event delegation，為什麼我們需要它？

事件委派，利用冒泡的機制，可以將子節點的事件監聽綁在母節點上，可以減少過多的事件監聽，也可以避免原本不在其中的元素無法監聽的情況，但由於子節點的部分數量會很多，所以會需要加上一些判斷輔助，像是 nodeName 跟 class 名稱之類的。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

- event.preventDefault()，可以用來防止元素的預設行為發生，像 a 連結點選後會自動導向到目標網址，加上此事件後，就不會發生導向的這個動作。

- event.stopPropagation()，阻止當前事件的捕捉以及冒泡的行為，將事件的傳遞就中斷在此處，這樣可以避免同時觸發到在相同傳遞路線上的事件，但同一層級的依然會觸發。

- event.stopImmediatePropagation()，同樣會阻止事件的捕捉及冒泡行為，同層級的同樣會被阻止。

舉例來說，HTML 中有一個 div 包住 a 標籤，接著在 JS 中分別幫 div 跟 a 分別設置一個監聽事件，點擊 a 標籤會觸發預設行為以及 a, div 上的監聽事件，這時加上 a.preventDefault 就會使防止預設行為發生，若加上 a.stopPropagation 就會只觸發 a 的監聽事件。
