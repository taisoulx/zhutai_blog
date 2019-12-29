---
title: MongoDB数组操作符、运算符和文档游标
date: 2019-10-26
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---
## 数组操作符
$all 匹配数组字段中包含所有查询值的文档
$elemMatch 匹配数组字段中至少在一个值满足筛选条件的文档

### $all 操作符
语法：
`{<field>:{$all:[<value1>,<value2>...]}}`
 eg:
 1. 创建包含数组和嵌套数组的文档
 ```js
 db.accounts.insert(
     [
         {
             name: "jack",
             balance: 2000,
             contact: ["111111","Alabama","us"]
         },
         {
             name: "karen",
             balance: 2500,
             contact: [["22222222","33333333"],"Beijing","China"]
         }
     ]
 )
 ```
 2. 读取联系地址位于中国北京的银行账户文档
 ```js
db.accounts.find({contact:{$all:["China","Beijing"]}})
 ```
 3. 读取联系电话包含22222222和33333333的银行账户文档
 ```js
db.accounts.find({contact:{$all:[["22222222","33333333"]]}})
 ```
 这里["22222222","33333333"]是查询元素

### $elemMatch
语法：
`{<field>:{$elemMatch:{<query1>,<query2>,...}}}`

1. 读取了联系电话在100000000至200000000之间的银行账户文档

```js
db.accounts.find(
    {
        contact:{
            $elemMatch:{
                $gt:"100000000",
                $lt:"200000000"
            }
        }
    }
)
```

2. 读取包含一个在100000000和200000000之间，和一个在200000000至300000000之间的联系电话的银行账户文档
```js
db.accounts.find(
    {
        contact:{
            $all:[
                {
                    $elemMatch:{
                        $gt:"100000000",$lt:"200000000"
                    }
                },
                {
                    $elemMatch:{
                        $gt:"200000000",
                        $lt:"300000000"
                    }
                }
            ]
        }
    }
)
```

## 运算操作符

$regex 匹配满足正则表达式的文档
### 语法
`{<field>:{:/pattern/,:'<options>'}}`
`{<field>:{:/pattern/<options>}}`
兼容pcre v8.41正则表达式库
在和$in 操作符一起使用时，只能使用/pattern/<options>

eg:"读取用户姓名以c开头或者j开头的银行账户文档"
```js
db.accounts.find({
    name:{
        $in:[/^c/,/^j/]
    }
})
```

eg: “读取用户姓名包含lie（不区分大小写）的银行账户”
```js
db.accounts.find({name:{$regex:/lie/,$options:'i'}})
```
options:'i'是正则中忽略大小写 


## 文档游标
- db.collection.find()返回一个文档集合游标
在不迭代游标的情况下，只列出前20个游标
```js
var myCursor = db.accounts.find()
myCursor
```
我们也可以使用游标下标直接访问文档集合中的某一个文档
`myCursor[1]`

游历完游标中所有的文档之后，或者在10分钟之后，游标会自动关闭

可以使用noCursorTimeout()函数来保持游标一直有效
在这之后，在不遍历游标的情况下，需要主动关闭游标
`myCousor.close()1`

### 游标函数
- cursor.hasNext()
文档中是否所有文档都被遍历过了，返回true or false
- cursor.next()
访问下一个文档
- cursor.forEach()
遍历，接收一个函数去处理each
- cursor.limit()
`cursor.limit(<number>)`
返回指定数量的文档
- cursor.skip()
`cursor.skip(<number>)`
返回文档跳过nunber数量的文档
- cursor.count()
- 返回文档的数量number
`cursor.count(<applySkipLimit>)`
默认情况下，<applySkipLimit>为false,即cursor.count()不会考虑cursor.limit()和cursor.limit()的效果
eg:`db.accounts.find().limit(1).count()`==>结果是所有文档的数量而不是1（超过20条没有测试）
考虑limit,skip
`db.accounts.find().limit(1).count(true)`
注意：在不提供筛选条件时，cursor.count()会从集合的元数据Metaata中获得结果
当数据库分布式结构较为复杂时，元数据中的文档数量可能不准确，在这种情况下，应该避免应用不提供筛选条件的cursor.count()函数，而使用聚合管道来计算文档数量
- cursor.sort()
排序
`cursor.sort(<document>)`
这里的<document>定义了排序的要求
{field: ordering}
1表示由小到大的正向排序，-1表示逆向排序
eg:"按照余额从大到小，用户姓名按字母排序的方式排列银行账户文档"
`db.accounts.find().sort({balance:-1,name:1})`
"读取余额最大的银行账户文档"
`db.accoounts.find().sort({balance:-1}).limit(1)`

组合使用：
`cursor.skip(),cursor.limit(),cursor.sort()`
- cursor.skip()在cursor.limit()之前执行
`db.accounts.find().limit(5).skip(3)`
- cursor.sort()在cursor.skip()和cursor.limit()之前执行
- 不管在函数中写的顺序是怎么样的，游标函数的执行顺序是sort(),skip(),limit()