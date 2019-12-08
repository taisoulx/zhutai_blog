---
title: 删除docker中异常image
date: 2019-06-16
tags:
 - docker
categories: 
 - linux
---

# 进入超级管理员模式
`sudo su`

# 第二步 
`docker ps -a | grep "Exited" | awk '{print $1 }'|xargs docker stop`

# 第三步
`docker ps -a | grep "Exited" | awk '{print $1 }'|xargs docker rm`

# 第四步
`docker images|grep none|awk '{print $3 }'|xargs docker rmi`

# 查看镜像目录
`docker images`