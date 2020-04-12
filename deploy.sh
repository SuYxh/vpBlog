#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'xx.xxxx.cn' > CNAME


git init
git config user.name "SuYxh"
git config user.email "1806328384@qq.com"
git add -A
git commit -m 'deploy-github'



# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:SuYxh/vpBlog.git master:gh-pages


cd -
    