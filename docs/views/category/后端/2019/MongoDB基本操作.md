---
title: MongoDB基本操作
date: 2019-10-26
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## 文档主键 _id
* 文档主键的唯一性
* 支持所有数据类型（数组除外）
* 复合主键

### 对象主键 objectID
* 默认的文档主键
* 可以快速生成的12字节id
* 包含创建时间

## 创建文档

* `db.collection.insert()`
* `db.collection.save()`
* 创建多个文档

## 使用mongo shell进行操作

### 使用test数据库
1. `use test`
### 查看test数据库中的集合
1. `show collections`

### 开始创建第一个文档
1. `db.collection.insertOne()`
2. 准备写入数据库的文档
```js
{
    _id: "account1",
    name: "alice",
    balance: 100
}
```
3. 将文档写入accounts集合
```js
db.accounts.insertOne(
    {
        _id: "account1",
        name: "alice",
        balance: 100
    }
)
```
4. 返回的结果
```js
{ "acknowledged" : true, "insertedId" : "account1" }
```
* `"acknowledged" : true `表示安全写级别被启用
* 由于我们在`db.collection.insertOne()`命令中没有提供writeConcern文档，这里显示的是mongoDB默认的安全写级别启用状态
* "insertedId"显示了被写入的文档的_id

5. `db.collection.insertOne()`命令会自动创建collection

### 创建多个文档
1. `db.collection.insertMany()`
2. 语法：
```js
db.collection.insertMany(
   [ <document 1> , <document 2>, ... ] ,//An array of documents to insert into the collection. 注意是数组
   {
      writeConcern: <document>,
      ordered: <boolean>   //Optional. A boolean specifying whether the mongod instance should perform an ordered or unordered insert. Defaults to true.   默认式按照顺序添加的    顺序添加的速度要慢于不按顺序添加的
   }
)
```

```js
db.accounts.insertMany(
    [
            {
                name:"edward",
                balance:700
            },
            {
                name:"fred",
                balance:20
            }
    ],
    {
        ordered:false
    }
)
```

### 通用创建用法-insert
1. 语法:
```js
db.collection.insert(
   <document or array of documents>,  //数组或者文档都可以添加
   {
     writeConcern: <document>,
     ordered: <boolean> //跟insertMany()操作作用一致
   }
)
```
2. 案例
```js
db.accounts.insert(
    [
        {
            name: "cla",
            balance:500
        },
        {
            name: "tai",
            balance: 501
        }
    ]
)
```
