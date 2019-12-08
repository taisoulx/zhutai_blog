---
title: react-tools-extension的使用
date: 2019-07-03
tags:
 - react
 - tool
categories: 
 - 前端
---

# 安装chrome插件 react-tools-extension

# 项目中安装,插件
`yarn add react-tool-extension`

# 在store中使用
## 引入
`import { composeWithDevTools } from 'redux-devtools-extension'`

## 使用
`composeWithDevTools(applyMiddleware(ReduxThunk))`