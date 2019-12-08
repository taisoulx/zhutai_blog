---
title: ubuntu 安装mysql
date: 2019-06-25
sidebar: auto
tags:
 - mysql
 - ubuntu
categories: 
 - linux
---
 ## 前言
MySQL是一个开源数据库管理系统，通常作为流行的LAMP（Linux，Apache，MySQL，PHP / Python / Perl）堆栈的一部分安装。它使用关系数据库和SQL（结构化查询语言）来管理其数据。
<!-- more -->

## 安装MySQL
更新列表
`sudo apt-get update`
## 安装MySQL服务器
`sudo apt-get install mysql-server`
**在安装过程中，系统将提示您创建root密码。选择一个安全的，并确保记住它，因为后面需要用到这个密码。**(可能不会出现)

## 安装MySQL客户端
`sudo apt-get install mysql-client`
## mysql-server和mysql-client区别

mysql-server 是MySQL核心程序将安装MySQL数据库服务器，用于生成管理多个数据库实例，持久保存数据并为其提供查询接口（SQL），供不同客户端调用。

mysql-client 是操作数据库实例的工具，允许连接到MySQL服务器使用该查询接口。它将为您提供MySQL命令行程序。

如果只需要连接到远程服务器并运行查询，只安装mysql-client就可以了。如果是服务器只提供连接服务的只需要安装mysql-server


# 安装中没有设置密码的情况
在Ubuntu上安装MySql，使用了如下命令：
`sudo apt install mysql-server`
安装过程中竟然没有提示输入root账户的密码，查阅资料后，将修改root密码的过程记录如下：
进入/etc/mysql目录，查看debian.cnf文件
`cd /etc/mysql`
`sudo cat debian.cnf`
该文件中记录了用户名密码：

使用上面文件中的user和password登录mysql
`mysql -udebian-sys-maint -pxedvSNKdLavjuEWV`
登录之后，使用如下方法修改root账户的密码
`use mysql;`
`update user set authentication_string=PASSWORD("123456") where user='root';`
`update user set plugin="mysql_native_password";`
`flush privileges;`
`quit;`

修改完成之后，即可使用root账户和你设置的密码登录mysql了
mysql -uroot -p[你的密码]
