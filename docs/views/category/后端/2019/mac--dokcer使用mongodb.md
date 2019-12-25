---
title: mac下采用docker使用MongoDB
date: 2019-10-25
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## docker切换到国内源

在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址即可
`http://hub-mirror.c.163.com`

## 下载MongoDB的docker镜像

` docker pull mongo:4 `

## 查看下载的镜像

` docker images `

## 启动一个MongoDB服务器容器

` docker run --name mymongo -v /mymongo/data:/data/db -d mongo:4`
--name mymongo --> 容器名字
-v /mymongo/data:/data/db -->挂在数据目录
-d --> 后台运行容器

====>报错处理：
### 错误码：

```
docker: Error response from daemon: Mounts denied:
The path /mymongo/data
is not shared from OS X and is not known to Docker.
You can configure shared paths from Docker -> Preferences... -> File Sharing.
See https://docs.docker.com/docker-for-mac/osxfs/#namespaces for more info.
```
用docker container ls -a查看是存在一个为mongo:4的image
使用docker restart [CONTAINER ID]
再使用docker ps查看，已经在运行了
使用docker logs mymongo也能输出日志
使用docker run --link mymongo:mongo -p 8081:8081 mongo-express，也能打开http://localhost:8081/


## 查看docker容器状态
`docker ps`

## Mongo Express 是一个基于网络的MongoDB数据库管理界面
## 下载 mongo-express镜像
`docker pull mongo-express`

## 运行mongo-express
`docker run --link mymongo:mongo -p 8081:8081 mongo-express`
 docker run --link mymongo:mongo -p 8081:8081 mongo-express

## mongo shell是用来操作MongoDB的JavaScript客户端界面 
## 运行mongo shell
`docker exec -it mymongo mongo`
