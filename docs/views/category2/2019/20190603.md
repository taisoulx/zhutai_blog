---
title: manjaro搜狗输入法异常
date: 2019-06-03
tags:
 - manjaro
categories: 
 - linux
---

# 搜狗输入法异常！请删除.config/SogouPY 并重启

Manjaro系统，突然有一天搜狗就不能用了，总是提示上述语句。删除了相关文件并且重启还是没有用。后来在终端中输入
`sogou-qimpanel`
提示找不到libfcitx-qt.so，于是找到原因，安装fcitx-qt4就可以成功解决上述问题。
`yaourt -S fcitx-qt4`