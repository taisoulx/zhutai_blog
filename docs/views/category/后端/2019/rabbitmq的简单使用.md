---
title: rabbitmq的简单使用
date: 2019-06-15
sidebar: auto
tags:
 - rabbitmq
 - golang
categories: 
 - 后端
---

# rabbitmq的简单说明

## 安装
### 采用docker安装
`sudo docker pull rabbitmq:3.7-management`
### 启动
`sudo docker run -d --hostname localhost --name myrabbit -p 15672:15672 -p 5672:5672 rabbitmq:3.7-management`

## 端口连接说明
### 管理后台登录：127.0.0.1:15672
### 连接rabbitmq:
1、定义mqurl
`// url格式 amqp://账号：密码@host:port/vhost`
`MQURL = "amqp://imoocuser:imoocuser@127.0.0.1:5672/imooc"`

2、定义结构体
``` golang
type RabbitMQ struct {
	conn    *amqp.Connection
	channel *amqp.Channel
	//队列名称
	QueueName string
	//交换机
	Exchange string
	//key
	Key string
	//连接信息
	Mqurl string
}
```
3、创建结构体实例
``` golang
func NewRabbitMQ(queueName string, exchange string, key string) *RabbitMQ {
	rabbitmq := &RabbitMQ{QueueName: queueName, Exchange: exchange, Key: key, Mqurl: MQURL}
	var err error
	//创建rabbitmq连接
	rabbitmq.conn, err = amqp.Dial(rabbitmq.Mqurl)
	rabbitmq.failOnErr(err, "创建连接错误")
	rabbitmq.channel, err = rabbitmq.conn.Channel()
	rabbitmq.failOnErr(err, "获取channel失败")
	return rabbitmq
}
```
### 其他管理
1、断开连接
```golang
func (r *RabbitMQ) Destory() {
	_ = r.channel.Close()
	_ = r.conn.Close()
}
```
2、错误处理函数
```golang
func (r *RabbitMQ) failOnErr(err error, message string) {
	if err != nil {
		log.Fatalf("%s,%s", message, err)
		panic(fmt.Sprintf("%s,%s", message, err))
	}
}
```
