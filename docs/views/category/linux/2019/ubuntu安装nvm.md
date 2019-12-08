---
title: ubuntu 安装nvm
date: 2019-06-26
tags:
 - nvm
 - ubuntu
categories: 
 - linux
---
# Ubuntu安装nvm

nvm是一个非常不错的node版本管理器，类似于ruby的rvm。
其github地址为https://github.com/creationix/nvm。
此处介绍一下如何在ubuntu上安装使用nvm。
<!-- more -->

## 首先安装必要的包。
`sudo apt-get update ` 
`sudo apt-get install build-essential libssl-dev  `

## 然后安装nvm的脚本，有两种方法curl或wget:
### 通过curl:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash  `

### 通过wget:

`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash  `
检查安装及使用：
注意，此处需要重启terminal终端才能生效。
使用nvm --help查看是否安装成功。
使用nvm ls查看已经安装的版本。
使用nvm ls-remote查看所有远端版本。
使用nvm install安装某个版本，如nvm install v5.3.0。
使用nvm use切换到某个版本，如nvm use v5.3.0使用5.3.0，nvm use system使用系统版本