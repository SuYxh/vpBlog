# BUG分支
##### 场景1：正在开发pay的功能，突然出现一个小BUG需要修改【bug出现在master】：

1. 使用  `git stash`  把当前工作现场“储藏”起来 .
2. 用`git status`查看工作区，是干净的,因此可以放心地创建分支来修复bug。 
3. bug出现在master分支上， 就从`master`创建临时分支： `git checkout -b bug2` , 需要先切回master分支：`git checkout master`
4. 修复bug ：在 bug2分支 新建一个文件写点东西，【搞完记得提交！】 来模仿 修改bug的过程！
5. 修复完成后，切换到`master`分支，并完成合并，最后删除`bug2`分支： `$ git checkout master`    `$ git merge bug2`  `$ git branch -d bug2`
6. 现在回到`pay`分支干继续开发：`$ git checkout pay`  ,再用`$ git status`  `$ git stash list`分别查看一下
7. 恢复现场：
   -  用`git stash apply`恢复，但是恢复后，stash内容并不删除，需要用`git stash drop`来删除； 
   -  用`git stash pop`，恢复的同时把stash内容也删了： 

> 如果多次stash，恢复的时候，先用git stash list查看，然后恢复指定的stash，用命令：`$ git stash apply stash@{0}`



**思考**：在`master`分支上修复了bug后，我们要想一想，`dev`分支是早期从`master`分支分出来的，所以，这个bug其实在当前`dev`分支上也存在。那怎么在`dev`分支上修复同样的bug？重复操作一次，提交不就行了？有木有更简单的方法?  

**方法**：同样的bug，要在`dev`上修复，我们只需要把`364d98a fix bug2`这个提交所做的修改“复制”到`dev`分支。我们只想复制`364d98a fix bug2`这个提交所做的修改，并不是把整个`master`分支`merge`过来。为了方便操作，Git专门提供了一个`cherry-pick`命令，让我们能复制一个特定的提交到当前分支： `git cherry-pick 364d98a`【先切换到`dev`在使用命令】。 用`git cherry-pick`，我们就不需要在`dev`分支上手动再把修bug的过程重复一遍。 

>  既然可以在`master`分支上修复bug后，在`dev`分支上可以“重放”这个修复过程，那么直接在`dev`分支上修复bug，然后在`master`分支上“重放”行不行？当然可以，不过你仍然需要`git stash`命令保存现场，才能从`dev`分支切换到`master`分支。 