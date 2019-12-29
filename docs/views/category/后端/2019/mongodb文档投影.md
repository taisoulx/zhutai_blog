---
title: MongoDB文档投影
date: 2019-10-29
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## 查询：db.collection.find(<query>,<projection>)
- 不使用投影时，db.collection.find()返回符合筛选条件的完整文档
- 使用投影可以有选择性返回文档中的部分字段

### 语法：{ field: inclusion }
- 1表示返回字段，0表示不返回字段

eg：“只返回银行账户文档中的用户姓名”
- `db.accounts.find({},{name:1})`===>返回文档中的name
- 结果：
```js
{ "_id" : ObjectId("5e06c416bf9f4e3e4a8fd287"), "name" : "cla" }
{ "_id" : ObjectId("5e06c416bf9f4e3e4a8fd288"), "name" : "tai" }
{ "_id" : ObjectId("5e06c6f6bf9f4e3e4a8fd289"), "name" : "jack" }
{ "_id" : ObjectId("5e06c6f6bf9f4e3e4a8fd28a"), "name" : "cooke" }
{ "_id" : ObjectId("5e06cc05bf9f4e3e4a8fd28b"), "name" : "charlie" }
```
- 如果不返回文档主健
- `db.accounts.find({},{name:1,_id:0})`
- 返回结果：
```js
{ "name" : "cla" } 
{ "name" : "tai" }
{ "name" : "jack" }
{ "name" : "cooke" }
{ "name" : "charlie" }
```
- 除了文档主键外，我们不可以在文档投影文档中使用包含和不包含这两种投影操作

## 在数组中使用投影
### $slice操作符可以返回数组字段中的部分元素
`db.accounts.find({},{_id:0,name:1,love:{$slice:1}})` 
: 只返回文档中love字段下数组中第一个结果
```js
{ "name" : "cla" }
{ "name" : "tai" }
{ "name" : "jack" }
{ "name" : "cooke" }
{ "name" : "charlie" }
{ "name" : "xxx", "love" : [ "pingpong" ] }
{ "name" : "biubiubiu", "love" : [ "code" ] }
```
- `db.accounts.find({},{_id:0,name:1,love:{$slice:-1}})` 
: 返回倒数第一个
```js
{ "name" : "cla" }
{ "name" : "tai" }
{ "name" : "jack" }
{ "name" : "cooke" }
{ "name" : "charlie" }
{ "name" : "xxx", "love" : [ "game" ] }
{ "name" : "biubiubiu", "love" : [ "dota2" ] }
```

- `db.accounts.find({},{_id:0,name:1,love:{$slice:[1,2]}})` 
: skip 1个，再返回接下来的2个
```js
{ "name" : "cla" }
{ "name" : "tai" }
{ "name" : "jack" }
{ "name" : "cooke" }
{ "name" : "charlie" }
{ "name" : "xxx", "love" : [ "basketball", "game" ] }
{ "name" : "biubiubiu", "love" : [ "basketball", "dota2" ] }
```
## 在数组中使用投影：$elemMatch和$操作符可以返回数组字段中满足筛选条件的第一个元素,只会返回一个 
`db.accounts.find({},{name:1,love:{$elemMatch:{$gt:'aaa'}}})`