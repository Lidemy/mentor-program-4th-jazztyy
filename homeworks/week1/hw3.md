# 教你朋友 CLI

## 要學 CLI，從英文開始吧！
---
#### 不是說好學 CLI 怎麼變上英文了？

#### 什麼，難道你沒聽過，問工程師什麼語言最難學，他們會說是英語嗎？

CLI，全名：Command Line Interfact(命令列介面) 跟 GUI (Graphical User Interface, 圖形使用者介面) 都是我們用來跟電腦溝通的方式。

GUI 就是我們一般用滑鼠去點取畫面上的各種圖形或文字，這個動作會把命令傳給電腦，電腦再依收到的命令去執行動作。

CLI 則是沒有畫面，單純使用字元去傳遞命令給電腦，同樣電腦會依收到的命令去執行動作。

## 接下來，讓我們穿越吧！
---
#### 說好的教我 CLI 呢？怎麼就穿越了？

#### 來不及，你已經穿越惹。

你現在到了一個陌生的地方，看看你現在在哪裡吧，心中默念 `pwd`，然後再默念 `ls` 看看你周遭有什麼可以使用的東西吧。

![](https://i.imgur.com/esVrraV.gif)

你看到了一些東西，默念 `cat 名稱` 看看他們寫了些什麼，就從 `recipe.txt` 開始看吧，然後使用裡面的功能來製作食物吧。

#### 不是，不是應該先看 key.txt 嗎？

![](https://i.imgur.com/LGmrTtY.gif)

現在你做出了 `food`，很好，但是這是不能吃的，請默念 `mv food rice`，然後順便看看 `storage.txt` 裡面的東西然後執行吧。

#### 不是，我說那個 key.txt 呢？

![](https://i.imgur.com/eJNgVUq.gif)

你腦中思緒好像很亂呢，看看 `clamdown` 吧，會對你有幫助的，看完後默念 `mv rice bag` 把 `rice` 放進 `bag` ，然後默想 `cd bag` 看看有沒有放好。

#### 好吧......

![](https://i.imgur.com/Casbibh.gif)

對了，我不喜歡吃飯，幫我弄個麵好嗎？默想 `cp rice noodle` 就行了，然後默想 `cd ..` 把視線從包包中移開吧，然後去看看 `remove.txt` 順便執行吧。

#### 我的 key.txt......

![](https://i.imgur.com/cfewn8P.gif)

終於到了這個時候，你可以看看 `key.txt` 然後離開這裡了，然後相信我，離開後默念 `rm -r CLI_Dungeno` 

![](https://i.imgur.com/CZvtyEv.gif)

#### 這是哪裡？

這是是哪裡你還敢問阿，不會默念 `pwd` 嗎？這裡是前端大陸，你還有很多事情要做呢，先去 Git_Port 蒐集資料吧。

## 於是，一場偉大的冒險，就這樣結束惹。

### 補上比較正常的介紹方法：

- `pwd`：當前位置。

- `ls`：顯示當前資料夾有那些東西。

- `cd`：移動到不同的檔案中。
    - `cd..`：表示回到上一層
    - 若不想打完整檔案名，打完前面的部分字元按 tab 會幫你補完後續字元。

- `/?`：在一些指令後加上 /? 可以得到說明，像 dir, cmd 等。

- `touch`：創造一個檔案，或改變它更動的時間。

- `rm`：將檔案移除，加上 `-r` 可強制移除。

- `rmdir`：刪除資料夾。

- `mkdir`：建立資料夾。

- `mv`：移動檔案或重新命名。
    - 移動檔案：`mv 檔案 資料夾`
    - 重新命名：`mv 檔案 新檔名` 

- `cp`：複製檔案。
    - `cp 被複製的檔案 複製好的檔案名` 若為資料夾，則為 `cp -r 被複製的資料夾 複製好的資料夾`

- `clear`：清除畫面。

### 對了，h0w哥我差點就把你忘記了。

1. 建立 wifi 資料夾
```
mkdir wifi
```
2. 進去 wifi 中
```
cd wifi
```
3. 建立 afu.js 這個檔案
```
touch afu.js
```
4. 查看有沒有建立成功
```
ls 
```
