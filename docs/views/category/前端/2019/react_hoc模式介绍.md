---
title: react HOC模式介绍
date: 2019-07-09
sidebar: auto
tags:
 - react
 - HOC
categories: 
 - 前端
---
:::tip
# HOC
react的一种开发模式:接收组件作为参数并返回新的组件

# 定义
* 在react 中接收组件Comp
* 在_app中,组件接收的参数{ Component,pageProps,...rest },其中...rest是其他不用重新赋值的参数
* getInitialProps是在_app中重新定定义的方法,需要传入,否则在子组件中将拿不到这个结果
:::
<!-- more -->
```js
export default (Comp)=>{
    function TestHocComp({Component,pageProps,...rest}){
    console.log(Component,pageProps)
    if (pageProps){
      pageProps.test = '123'
    }
    return <Comp Component = { Component } pageProps = { pageProps } {...rest}/>
  }

  TestHocComp.getInitialProps = Comp.getInitialProps
  return TestHocComp
}
```