---
title: manjaro安装shadowsocks-qt5
date: 2019-06-02
tags:
 - manjaro
categories: 
 - linux
---

# 安装shadowsocks-qt5
manjaro 已经默认安装好

# 装备一个ss账号
`https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7#%E5%85%8D%E8%B4%B9ssssr%E8%8A%82%E7%82%B9%E5%88%97%E8%A1%A8%E4%B8%8D%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%96%B0%E8%B4%A6%E5%8F%B7ip%E6%88%96%E7%AB%AF%E5%8F%A3%E6%88%96%E5%AF%86%E7%A0%81`

# 配置shadowsocks-qt5

特殊说明：
local address :127.0.0.1  
local port :1080 
lcoal server type:socks5
encryption method :ASE-256-CFB

# 配置系统代理
单独是配置shadowsocks-qt5并不能使用网络，所以还要配置系统的代理。
打开设置-网络-网络代理
代理方式选择手动，第一个http代理清空配置，端口设置为0，然后第四个socks代理设置为127.0.0.1，端口填写1080，ip和端口在shadowsocks-qt5中有设置，使用默认的就好。

# 下载代理插件Proxy SwitchyOmega
chrome扩展商店的地址在这里。

# 安装好Proxy SwitchyOmega之后进行配置

新建一个规则，名字随意，然后代理规则那里选择socks5，服务器地址填127.0.0.1，端口1080

然后保存修改，在浏览器中选择auto switch（自动切换）：可以根据访问的地址进行手动配置