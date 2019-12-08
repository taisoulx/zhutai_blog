---
title: 使用apt-fast
date: 2019-06-19
tags:
 - ubuntu
categories: 
 - linux
---

如果您是 Ubuntu 系统的高级用户，应该经常使用apt-get命令。如果您希望下载速度更快，可以安装apt-fast并在使用apt-get命令的地方用apt-fast来替换。

sudo add-apt-repository ppa:apt-fast/stable

sudo apt-get update

sudo apt-get install apt-fast