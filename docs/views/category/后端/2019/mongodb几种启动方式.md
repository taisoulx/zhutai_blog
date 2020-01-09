---
title: mongodb几种启动方式
date: 2020-01-09
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

# mongodb的几种启动方式

 启动Mongodb服务有两种方式，前台启动或者Daemon方式启动，前者启动会需要保持当前Session不能被关闭，后者可以作为系统的fork进程执行，下文中的path是mongodb部署的实际地址。
 
 ## 1. 最简单的启动方式，前台启动，仅指定数据目录，并且使用默认的27107端口，cli下可以直接使用./mongo连上本机的mongodb，一般只用于临时的开发测试。
`1./mongod --dbpath=/path/mongodb`
## 2. 启动绑定固定的IP地址、端口，这就mongo在连接mongod的时候就需要指定IP和端口了。
 `1./mongo 10.10.10.10:12345 `
 

 ## 3. daemon后台运行，简单的是命令后面加“&”。
`1./mongod --dbpath=/path/mongodb --bind_ip=10.10.10.10 --port=12345 & `
或者使用mongod自带的--fork参数，此时必须指定log的路径。
`1./mongod --dbpath=/path/mongodb --fork=true logpath=/path/mongod.log `
## 4. （推荐）以配置文件形式保存配置。
```js
1     port=12345  
2     bind_ip=10.10.10.10  
3     logpath=/path/mongod.log  
4     pidfilepath=/path/mongod.pid  
5     logappend=true  
6     fork=true  
```
然后启动mongod时引入配置文件：`./mongod -f /path/mongod.conf  `

下面是mongod启动的常用参数详细说明：
| 参数 | 说明 | 取值示例 |
|  ----  | ----  |
| dbpath | mongodb数据文件存储路径 | /data/mongodb |
| logpath | mongod的日志路径 | /var/log/mongodb/mongodb.log |
| logappend | 日志使用追加代替覆盖 | true |
| bind_ip | 绑定的IP | 10.10.10.10 |
| port | 绑定的端口 | 27107 |
| journal | write操作首先写入“日记”，是一个数据安全的设置，具体参考官方文档。 | true |
## 5 Mongodb开机启动
在`/etc/rc.local`文件末尾添加下面的代码
```js
#add mongodb service
rm -rf /data/mongodb_data/* && /usr/local/mongodb/bin/mongod --dbpath=/data/mongdb_data/ --logpath=/data/mongdb_log/mongodb.log --logappend &
``` 
##关闭mongodb

如果没有使用--fork，直接可以前台退出终端关闭。
通过这种方式，Mongodb将会自己做清理退出，把没有写好的数据写完成，并最终关闭数据文件。
要注意的是这个过程会持续到所有操作都完成。
如果使用--fork在后台运行mongdb服务，那么就要通过向服务器发送shutdownServer()消息来关闭。
## 1、普通命令：
```js
$ ./mongod
> use admin
> db.shutdownServer()
```
要注意的是，这个命令只允许在本地，或是一个经过认证的客户端

## 2、如果这是一个主从式的复制集群，在1.9.1版本后将按下面的步骤来关闭
检查从Mongodb的数据更新时间
如果所有的从Mongodb和主的时间差都超过10，这个时候不会关闭mongodb
（在这种情况下面，我们可以通过配置timeoutSecs的方式来让从Mongodb完成数据的更新）
如果其中有一个从Mongodb与主服务时间差在10秒内，那么主服务器将会关闭，并且等待从Mongodb更新完成并关闭。
 
## 3、如果没有up-to-date 从Mongodb且你想强制关闭服务，可以通过添加force:true;命令如下：
```js
> db.adminCommand({shutdown : 1, force : true})
> //or
> db.shutdownServer({force : true})
```
 
## 4、指定特定超时时间的关闭服务器，命令同上，另外加上一个timeoutsec:参数
```js
> db.adminCommand(shutdown : 1, force : true, timeoutsec : 5)
> //or
> db.shutdownServer({force : true, timeoutsec : 5})
 ```