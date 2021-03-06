---
title: redux的使用
date: 2019-07-04
sidebar: auto
tags:
 - react
 - redux
categories: 
 - 前端
---


# 什么是redux
* 单项数据流的状态管理工具

<!-- more -->
# redux 使用
## 安装
`yarn add redux`

## 引入'createStore'
`import { createStore } from 'redux'`

## 初始化state
```js
const initialState = {
  count: 0
}
```
## 定义reducer,参数为state,action
```js
const ADD = 'ADD'
function reducer(state = initialState,action ){
  console.log(state,action)
  switch (action) {
    case ADD:
      return {count: state.count + 1}
    default:
      return state
  }
}
```
## 初始化store,接收reducer,state
`const store  = createStore(reducer,initialState)`

## reducer 补充说明
* 纯粹的方法,不应该有任何副作用
* 有任何数据更新应该返回新的对象
* 可以通过combineReducers 进行合并 
  * 根据不同情况会声明更多的reducer

## combineReducers使用说明
* 声明每个reducer对应的state
```js
  const initialState = {
  count: 0
}

const initialUserState = {
  userName: 'taisoulx',
  name: 18
}
```
* 声明独立的reducer
```js
const ADD = 'ADD'
const NUM = 'NUM'

function counterReducer(state = initialState,action ){
  console.log(state,action)
  switch (action.type) {
    case ADD:
      return {count: state.count + 1}
    case NUM:
      return {count: state.count+2}
    default:
      return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state=initialUserState,action){
  switch(action.type){
    case UPDATE_USERNAME:
      return {
        ...state,
        userName: 'jaqueline'
      }
    default:
      return state
  }
}
```
* 使用combineReducers降reducer组合起来
```js
const allReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})
```
* 声明store,此时state需要对应传入
```js
const store  = createStore(allReducer,{
  counter:initialState,
  user: loadGetInitialProps
})
```

## action 说明
* 是一个拥有特定属性的对象
### action createore
```js
function add(num){
  return {
    type: ADD,
    num
  }
} 
```
### 异步action
* 使用插件来达到目的:redux-thunk
* 安装插件
`yarn add redux-thunk`
* 引入redux中插件管理器
`import {applyMiddleware} from 'redux`
* 引入redux-thunk
`import ReduxThunk from 'redux-thunk'`
* 使用:在声明store时传入的第三参数
```js
const store  = createStore(
  allReducer,
  {
  counter:initialState,
  user: loadGetInitialProps
  },
  applyMiddleware(ReduxThunk)
)
```
* 异步action的实现
```js
function add(num){
  return {
    type: ADD,
    num
  }
}
//异步action
function addAsync(num){
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(add(num))
    },1000)
  }
}
//触发
store.dispatch(addAsync(3))
```

