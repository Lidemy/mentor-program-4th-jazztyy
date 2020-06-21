# 跟你朋友介紹 Git

## 什麼是 git 能吃嗎？

- git 不能吃。
-  git 是一種幫你版本控制的程式。


## 版本控制又是啥？

- 就像遊戲更新會有版本號，每個新的版本號發布，都會增加新的東西或是有舊的東西被刪除，而每個版本號都會記錄，每個版本間的差異，像是誰被削弱，誰被 buff ，什麼物品被修改。

- 而 git，它可以幫你紀錄每次修改後產生的差異，並賦予每個版本一個代號 (commit id)，然後在哪天突然覺得以前的版本比較好，就可以利用它穿越到每個版本。甚至還可以創造平行的世界，讓兩邊同時進行呢，是不是很神奇。

## 簡單來說，git 是幫助你~~穿越時空~~管理檔案的程式

- 當你修改檔案，並進行 commit 後，就會產生 commit id，git 會利用它來幫助你管理檔案，至於 commit 是什麼後面就會提到了。

- commit id 是亂數，所以可以避免多人協作的時候，命名相同導致衝突發生。

- 另外，不想放入版本控制的檔案，也可以額外設置檔案讓它不被版本控制。

## 說這麼多還是實際演練吧！

- 接下來會使用到 command line 的語法，什麼你說你不會？我剛剛不是教過你了嗎？罰你再去看一次 hw3。

- 首先，先下載 [git](https://git-scm.com/download/win)，然後安裝。

- `git init` 
    - 抓住那個需要讓 git 控制的資料夾。
    - 讓它被 git 掌控吧！成功掌控的話資料夾中會多一個 .git 的資料夾，需要顯示隱藏資料夾才看得到。

- `git status`
    - 用來查看檔案是否有加入版控或是否修改過。
    - 會依據檔案狀態給予提示

![](https://i.imgur.com/NO9CIob.gif)

- `git add` 
    - 將檔案加入暫存變更的區域。
    - 假如檔案名稱修改過，一樣要重新 add 過。
    - 可使用 `add .` 

- `git commit`
    - 將確定修改完的檔案存入版本儲存庫 (repository)。

    - 記得後面加上 `-m"message"`，否則會進入一個叫 [vim](https://gitbook.tw/chapters/command-line/vim-introduction.html) 的神祕地區。

    - 加上 `-am"message"`，可以省略 add 這個步驟，不過假如是新增 (改名) 的檔案，還是必須透過 `git add` 這個步驟。

    - commit 過後的檔案，如果再進行修改，就要再次執行 `git add` => `git commit -m"message"`的步驟。

    - 此外，commit 後會建立一個 commit id，就是一個版本的意思，所以要完成所有要執行的修改後再使用，避免版本過多，之後不知道要回到哪個版本

![](https://i.imgur.com/5lsNxWv.gif)

- `git diff`
    - 執行後會出現這次修改跟上次版本差異的地方，要檔案在 modified 的狀態下才能使用，commit 之後就看不到了。

- `git log`
    - 執行後，可以看到各個版本的 commit id，可以利用它來移動到各個版本中。

![](https://i.imgur.com/gyalVao.gif)

- `git branch`

    - 後方加上自訂的`branchName`，執行後，會產出一個分支，也可以認為是平行時空，它會將原本的檔案完整複製一份過去。在不同分支上可以同時修改檔案，這樣就可以執行分工作業了。

    - 後方加上 `-v` 可以查看目前有多少分支。

    - 後方加上 `-d branchName` 可將該分支刪除。

    - 後方加上 `-m branchName` 可修改當前分支的名稱。

![](https://i.imgur.com/Zn202fw.gif)

- `git checkout branchName/commit id`
    - 執行後，可以移動到另一個分支或是先前的版本。

![](https://i.imgur.com/OEv1FM5.gif)

- `git merage branchName`
    - 執行後，會將分支合併到當前所在位置

    - 若有衝突，分支和本體都修改同樣的檔案，會出現以下畫面。

    - 衝突需手動修改，將檔案打開後會發現，git 已經幫你把衝突的部分標明了，只要將自己要的部分留下，然後再進行 commit 即可解決。

## 開心地開始你的 git 生活吧
- 朋友，我只能教你到這了，假如你想要學會更高深的技術，我有幾個 google 上認識的朋友可以介紹給你認識，[為你自己寫 git](https://gitbook.tw/)、[連猴子都能懂的 Git 入門指南](https://backlog.com/git-tutorial/tw/)、[git 學習小遊戲](https://learngitbranching.js.org/?locale=zh_TW)，希望你能好好的使用 git 去彌補你過去犯下的錯誤。