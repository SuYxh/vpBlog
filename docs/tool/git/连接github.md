# 连接github
> ssh -T github  
>
>ssh-agent bash
>
> ssh-add ~/.ssh/id_rsa_github_win

```SH
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin git@gitee.com:ironc/new_vocational_course.git
git push -u origin master
```

1.创建rsa密钥
```
ssh-keygen -t rsa -C "YourEmail" 

# "-t rsa"表示使用密钥的加密类型，还可以为dsa；-C设置注释文字，
比如你的邮箱“YourEmail”，不一定要是github注册邮箱
```
2.将公钥设置到 github -> ssh 中

3.在`.ssh`中新建一个`config`文件，然后在`.ssh`文件夹下打开`git终端`运行命令`ssh -T github` ,其中 `github` 这个名字可以随便写，但是 要与`config`文件中的名字保持一致
```
# Host自己填一个名称 不要带中文就行
Host github
# 这里是网站地址
HostName github.com
# github对应的email或者用户名
User git
# coding对应的私钥
IdentityFile ~/.ssh/id_rsa_github_win
```

### 报错问题
1.`Cloning into 'study'... Permission denied (publickey). fatal: Could not read`
![mark](http://qn.huat.xyz/win/20200312/FluxVb6VoFh7.png)

> **解决办法**
> - 执行eval “$(ssh-agent -s)”确认ssh-agent处于开启状态，打印pid... 表示启用中；
>
> - 执行指令ssh-add ~/.ssh/id_rsa 添加ssh key至ssh agent,此处可能会报错`Could not open a connection to your authentication agent.` ,看下方解决！

2.`Could not open a connection to your authentication agent.`
![mark](http://qn.huat.xyz/win/20200312/PbgtjII1heae.png)
> **解决办法**
> - 执行 `ssh-agent bash` 即可！完成后记得再次添加一下`ssh-add ~/.ssh/id_rsa_github_win
`

![mark](http://qn.huat.xyz/win/20200312/eJqTtqawRsMp.png)