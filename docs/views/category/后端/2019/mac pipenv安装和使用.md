---
title: mac pipenv安装与使用
date: 2020-01-12
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## 1、功能：
使每个项目有自己独立的的虚拟环境

## 2、安装
`pip3 install pipenv`

## 3、为项目添加虚拟环境
创建项目文件夹：`mkdir projectName`
安装虚拟环境:`pipenv install`
启动虚拟环境:`pipenv shell`
查看当前环境依赖：`pip3 list`
## 4、以后所有的依赖安装就都用`pipenv install ……`
例如安装flask：`pipenv install flask`

## 5、pipenv基本命令
退出虚拟环境：`exit`
进入虚拟环境：`pipenv shell`
安装：`p`ipenv install ……`
卸载：`pipenv uninstall ……`
查看依赖关系：`pipenv graph`
查看虚拟环境路径：`pipenv --venv` （在pycharm配置python环境会用到）

## 如果安装后出现pipenv:command not found

/usr/local/bin下没有pipenv软链
执行/`Users/hpb/Library/Python/3.6/bin/pipenv`显示没有权限

解决方法：卸载后用`sudo -H pip install -U pipenv`安装

## pip3升级后pip3命令报错Traceback (most recent call last): File "/usr/bin/pip", line 9, in

级pip后，使用时出现了问题：
```shell
Traceback (most recent call last):
  File "/usr/bin/pip", line 9, in <module>
    from pip import main
```
参考网上大神的方法，我的问题解决了。解决方法：

如果打开计算机，找到usr/bin/pip，直接修改发现没有权限。

这时直接打开终端，在终端中输入

sudo vim /Library/Developer/CommandLineTools/usr/bin/pip3
这时打开了pip3文件，修改
```shell
from pip import main  
if __name__ == '__main__':  
    sys.exit(main()) 
```
为
```shell
from pip import __main__  //修改
if __name__ == '__main__':  
    sys.exit(__main__._main())//修改
```  
