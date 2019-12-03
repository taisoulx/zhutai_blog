---
title: manjaro安装deb包
date: 2019-06-01
tags:
 - manjaro
categories: 
 - linux
---

# manjaro安装deb包

## step1、检查有没有安装 debtap
 `sudo pacman -Q debtap`
 没有就安装
 `yaourt -S debtap`  
## step2、 升级debtap
 `sudo debtap -u`
## 使用方法
`sudo debtap  xxxx.deb`
安装时会提示输入包名，以及license。包名随意，license就填GPL吧
## 上述操作完成后会在deb包同级目录生成×.tar.xz文件，直接用pacman安装即可
`sudo pacman -U x.tar.xz`