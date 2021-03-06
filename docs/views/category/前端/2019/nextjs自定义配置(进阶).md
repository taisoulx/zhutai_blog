---
title: nextjs自定义配置(进阶)
date: 2019-07-08
sidebar: auto
tags:
 - react
 - nextjs
categories: 
 - 前端
---

## 1.自定义app
### 作用
* 固定layout
* 保持一些公用状态
  * 全局数据同步
* 给页面传入一些自定义数据
* 自定义错误处理

<!-- more -->
## 2.document
* 只有在服务端渲染的时候才会被调用
* 用来修改服务端渲染的文档内容
* 一般用来配合第三方css-in-js方案使用

## lazyloading
* 异步加载模块
```js
const moment = await import('moment')
moment.default()
```
* 异步加载组件
```js
const Comp = dynamic(import('../components/comp'))
//Comp 为组件名
```

## next.config.js
配置情况,根据需要使用
```js
const configs = {
  // 编译文件的输入目录
  disDir: 'dest',
  // 是否给每个路由生成Etag,Etag用于缓存验证
  generateEtags: true,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容在内存中缓存的时长(ms)
    maxInactiveAge: 25 * 1000,
    // 同时缓存多少个页面
    pageBufferlength: 2,
  },
  // 在pages目录下哪种后缀的文件会被认为是页面
  pageExtensions: ['jsx','js'],
  // 配置BuildId
  generateBuildId:  async ()=> {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID
    }
    // 返回null使用默认的unique id
    return null
  },
  // 手动修改webpack config
  webpack(config,options) {
    return config
  },
  // 修改webpackDevMiddleware的配置
  webpackDevMiddleware: config =>{
    return config
  },
  // 可以在页面上通过 process.env.customKey获取value
  env: {
    customKey: 'value'
  },
  // 下面两个要通过'next/config'来读取
  // 只有在服务端渲染时才获取的配置
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECONDE_SECRET
  },
  // 在服务端渲染和客户端渲染都可以获取的配置
  publicRuntimeConfig: {
    staticFolder: '/static'
  },

}
```
* serverRuntimeConfig不在客户端显示

# ssr流程 
服务端
①浏览器发起/page请求
②koa接收到请求,并调用nextjs
③nextjs开始渲染
④调用app的getInitialProps
⑤调用页面的getInitialProps
⑥渲染出最中html
⑦返回给浏览器

客户端流程
①点击链接按钮
②异步加载页面组件js
③调用页面的getInitiaProps
④数据返回,路由变化
⑤渲染新的页面

数据请求都放在getInitiaProps,不放在生命周期函数中