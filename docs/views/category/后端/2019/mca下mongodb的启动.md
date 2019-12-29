---
title: mac下mongodb使用conf启动
date: 2019-12-28
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## 安装
`brew install mongodb`

## 启动
### 新建data目录
`mkdir ~/project/mongodb/data/db`

### 修改mongo配置文件mongod.conf
`cd /usr/local/etc/`
修改db地址
```shell
# Store data in /usr/local/var/mongodb instead of the default /data/db
dbpath = /Users/mac/project/mongoDB/data/db
```

### 使用配置文件启动服务
`mongod --config /Usr/local/etc/mongod.conf`

### 使用mongo shell 
`mongo`