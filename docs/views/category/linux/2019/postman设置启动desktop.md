---
title: postman设置启动desktop
date: 2019-06-23
tags:
 - postman
categories: 
 - linux
---

# 下载postman


# 设置全局变量
创建全局变量，也就是在任何地方都可以执行postman，不用去到安装目录，执行

`sudo ln -s /home/taisoulx/applications/Postman /usr/bin/postman`

# 设置desktop文件
`touch postman.desktop`
`vim postman.desktop`
并添加如下内容

``` conf
[Desktop Entry]

Encoding=UTF-8

Name=Postman

Exec=postman

Icon=/home/taisoulx/applications/Postman/icon.png

Terminal=false

Type=Application

Categories=Development;
```
`:wq`
# 复制desktop到全局目录
`sudo mv postman.desktop /usr/share/applications`