---
title: mongodb 删除文档
date: 2020--01-07
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## 删除文档
`db.collection.remove()`
`db.<collection>.remove(<query>,<options>)`
`<options>文档声明了一些删除操作的参数`

*在默认情况下，remove会删除所有符合筛选条件的文档*
*如果只想删除满足筛选条件的第一篇文档，可以使用justOne选项*

eg:“删除一篇余额小于500的银行账户文档”
```js
 db.accounts.remove({balance:500})
```
删除集合内所有文档
`db.accounts.remove({})`

删除集合
`db.collection.drop()`
`db.<collection>.drop({writeConcern:<document>})`
这里的writeConcern是安全写级别

如果集合中文档数量很多，使用remove命令删除所有文档的效率不高，可以使用drop()删除集合，再创建空集合并创建索引