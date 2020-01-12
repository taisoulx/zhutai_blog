---
title: mongodb更新文档
date: 2019-12-30
sidebar: auto
tags:
 - mac
 - MongoDB
categories: 
 - 后端
---

## 更新文档
- `db.collection.update()`
- `db.collection.findAndModify()`
- `db.collection.save()`

### `db.collection.update(<query>,<update>,<options>)`
- `<query>`文档定义了更新操作时筛选文档的条件
- 这里的`<query>`文档与`db.collection.find()`中的`<query>`文档时相同的
- `<update>`文档提供了更新的内容
- `<options>`文档声明了一些更新操作的参数
eg：更新整篇文档
- 如果 `<update>`文档不包含任何更新操作符，`db.collection.update()`将会使用`<update>`文档直接替换集合中符合`<query>`文档筛选条件的文档db
- eg:将‘jiack’的余额更改为389
`db.accounts.update({name:'jack'},{name:'jack',balance:'389'})`
- 几个需要注意的问题
1.文档的主键_id是不可更改的
2.在使用`<update>`文档替换整篇被更新文档时，只有*第一篇*符合`<query>`文档筛选条件的文档会被更新

### 更新操作符
-  更新特定字段
`db.collection.update(<query>,<update>,<options>)`
如果`<update>`文档只包含更新操作符，db.collection.update()将会使用`<update>`文档更新集合中符合`<query>`文档筛选条件的文档中的特定字段
- `$set` 更新或增加字段
语法：`{$set:{<field1>:<value1>,...}}`==>更新或新增字段
eg:'更新tai的银行账户余额和开户信息'
`db.accounts.update({name:'tai'},{$set:{balance:800,info:{dataOpen:new Date('2019-03-22T16:00:00Z'),branch:'miinshenyinhang'}}})`
- '更新或新增内嵌文档的字段'
eg:'跟新tai的银行账户的开户时间'
```js
db.accounts.update(
    {name:'tai'},
    {
        $set:{
            "info.dateOpen": new Date("2020-12-22T14:33:22Z")
        }      
    }
)
```
- 更新或新增数组内的字段
eg:"更新biubiubiu的第一个love" 
使用元素在数组中的下标
```js
db.accounts.update(
    {name:'biubiubiu'},
    {$set:{
        "love.0":"coding"
    }}
)
```
*如果向现有数组字段范围以外的位置添加新值，数组字段的长度会扩大，未被赋值的数组成员将被设置为null*


- `$unset` 删除字段
eg:'删除tai的银行账户余额和开户时间'
```js
db.accounts.update(
    {name:'tai'},
    {
        $unset:{
            balance:'',
            "info.dataOpen":''
        }
    }
)
```
*其实`$unset`命令中赋值（""）对操作结果并没有任何影响*
*如果`$unset`命令中的字段根本不存在，那么文档内容将保持不变*
· “删除数组内字段”
eg:删除biubiubiu的第一个love
```js
db.accounts.update(
    {name:"biubiubiu"},
    {$unset:{
        "love.0":"amy value"
    }}
)
```
*当使用$unset命令删除数组字段中的某一个元素时，这个元素不会被删除，只会被赋予null值，而数组的长度不会改变*

- `$rename` 重命名字段
如果`$rename`命令要重命名的字段并不存在，那么文档内容不会被改变
如果新的字段名已经存在，那么原有的这个字段会被覆盖
```js
db.accounts.update(
    {name:"tai"},
    {$rename:{
        "name":"info"
    }}
)
```
*原来info的内容就不见了*
当`$rename`命令中新字段存在的时候，`$rename`命令会先`$unset`新旧字段，然后又`$set`新的字段
* 重命名内嵌文档中的字段
eg:“更新karen的银行账户的开户时间和联系方式”
```js
db.accounts.insert(
    {
        name:'karen',
        own:{
            computer:'nuc8',
            phone:'iphone10',
        }
    }
)
```
```js
db.accounts.update(
    {name:'karen'},
    {
        $set:{
            info:{
                dateOpen: new Date("2018-01-01T16:33:11Z"),
                branch: "branch1"
            },
            "contact.3":{
                primaryEmail:"taisoulx@163.com",
                secondaryEmail:"taisoulx@gmail.com"
            }
        }
    }
)
```

```js
db.accounts.update(
    {name:'karen'},
    {
        $rename:{

        }
    }
)
```
--> “更新账户余额和开户地点字段在文档中的位置"
```js
db.accounts.update(
    {name:'karen'},
    {
        $rename:{
            "info.branch":"branch",
            "balance": "info.balance"
        }
    }
)
```
*`$rename`命令中的旧字段和新字段都不可以指向数组元素，这点和之前的`$set`和`$unset`命令不同*

- `$inc` 加减字段值
--> 给“biubiubiu”blance加上100
```js
db.accounts.update(
    {name:"biubiubiu"},
    {$inc:{
        balance: 100
    }}
)
```

- `$mul` 相乘字段值
同`$inc`-->都可以给变化数值给符号，相反作用
* `$inc`和`$mul`命令都只能应用在数字字段上*

- `$min` 比较减小字段值
-- 会保留较小的值

- `$max` 比较增大字段值
-- 会保留较大的值

*如果操作字段不存在，则会创建*

如果被更新字段类型和更新值类型不一致，$min和$max命令会按照BSON数据类型排序规则进行比较
最小
    Null
    Number(ints,longs,doubles,decimals)
    Symbol,String
    Object
    Array
    BinData
    ObjectId
    Boolean
    Date
    TimesTamp
    Reqular Expression  
最大

## 数组更新操作符
- `$addToSet`  向数组中增添元素
*如果要插入的值已经存在数组字段中，则`$addToSet`不会再添加重复值 *
*只有完全相同时，才会算作重复值*
==》向文档从插入多个love
```js
db.accounts.update(
    {name:'biubiubiu'},
    {
        $addToSet: {
            love:{$each:['swimming','sky']}
        }
    }
)
```
----> 如果不使用`$each`，则会将`['swimming,sky']`作为一个内嵌数组加入

- `$pop` 从数组中移除元素
只能删除数组字段中的第一个或最后一个
--> 删除数组字段中最后一个：
```js
db.accounts.update(
    {name:"biubiubiu"},
    {
        $pop:{love:1}
    }
)
```
--> 删除数组字段中第一个：
```js
db.accounts.update(
    {name:'biubiubiu'},
    {
        $pop:{love:-1}
    }
)
```
*只能用在数组上* 

- `$pull` 从数组中有选择性地移除元素
1.复制一片文档,name值设置为'cawa'
```js
db.accounts.find(
    {name:'biubiubiu'},
    {_id:0}
).forEach(function(doc){
    var newDoc = doc;
    newDoc.name = 'cawa';
    db.accounts.insert(newDoc)
})
```
2.eg:从love删除掉包含'es'的元素
```js
db.accounts.update(
    {name:'cawa'},
    {
       $pull:{
           love:{$regex:/es/}
       }
    }
)
```
*在`$pull`中筛选单位元素不需要使用`$elemMatch`，如果单位元素本身是内嵌数组，要操作内嵌数组中的元素，可以是哟`$eleMatch`进行操作*
1. 在love中增加内嵌数组['lol','chihi','qq飞车']'
```js
db.accounts.update(
    {name:'cawa'},
    {
        $addToSet:{
            love:['lol','chiji','qq飞车']
        }
    }
)
```
2. 从love的内嵌数组中删除'chiji'
```js
db.accounts.update(
    {name:'cawa'},
    {
        $pull:{
            love:{
                $elemMatch:{$eq:'chiji'}
            }
        }
    }
)
```


- `$pullAll` 从数组中有选择性地移除元素
`{$pull:{<field>:<value|condition>}}`
`<pullall:{field:[<value1>,<value2>...]}>`
相当于：
---->
`{$pull:{<field>:{$in:[<value1>,<value2>]}}}`

-->删除内嵌文档
`$pull`:
```js
db.accounts.update(
    {name:'karen'},
    {$pull:{
        lianxifangshi :{'email':'450403015@11.com'}
    }}

)
```
*`$pull`命令会删去包含指定的文档字段和字段值得文档元素，字段排列顺序不需要完全匹配*
*`$pullall`命令需要匹配对象完全相同，包括顺序*

- `$push` 向数组中增添元素
`$push`和`$addToSet`命令相似，但是`$push`命令的功能更强大
和`$addToSet`一样，如果push命令中指定的数组字段不存在，这个字段会被添加到原文档中


## 更新文档操作符号
占位符：`$`
`$.[]`


## 更新多个文档
options:

1. `multi:boolean`
```js
db.accounts.update(
    {},
    {$set:{currecy:"usd"}},
    {multi:true}
    
)
```
--> 所有的文档都将加上`currecy:'usd'` 

*注意，MongoDB只能保证*单个*文档操作的原子性，不能保证多个文档操作的原子性*
*更新多个文档的操作虽然在单一线程中执行，但是线程在执行过程中可能被挂起，以便其他线程也有机会对数据进行操作*
*如果要保证多个文档操作时的原子性，就需要使用MongoDB 4.0版本引入的事务功能进行操作*