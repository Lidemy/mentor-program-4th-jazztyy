# 交作業流程

1. 由於作業需要上傳至 GitHub，所以需要建立一個遠端的 repository，步驟如下： `git remote add 自訂名稱 網址`。

2. 建立一個新的 branch。
3. 轉換到新的 branch，可以順便檢查是否成功。
![](https://i.imgur.com/Gz7d9oI.gif)

4. 寫作業，新增的檔案要先用 `git add` 加入。
5. 寫完後會有變更，所以要使用 `git commit -am"訊息"`，將變更的部分 commit 起來。
6. 寫完後，將 branch push 到遠端的 repository 
![](https://i.imgur.com/PqdTrq7.gif)
7. 到 GitHub 上發起 pull request 
8. 到學習系統新增作業，並把 PR(pull request) 的連接貼上，並確認作業有檢查過並自我檢討且修正錯誤。 
![](https://i.imgur.com/KbUd08M.gif)
9. 等待助教批改作業，批改完後 GitHub 會顯示 merged 
![](https://i.imgur.com/k1dlYqK.png)
10. 再來，由於遠端的 branch 已經合併完成，但本地端的還沒，所以要將遠端的部分，pull 下來進行同步，再將已經合併完成的 branch 刪除。
![](https://i.imgur.com/IWcZogg.gif)
11. 成功提交作業了，幫自己拍拍手。