---
title: react-redux的使用
date: 2019-07-05
sidebar: auto
tags:
 - react
 - react-redux
categories: 
 - 前端
---


# react-redux的使用

## 安装
`yarn add react-redux`

## 使用
### 全局配置
* 在_app.js中配置
* 引入Provider
`import { Provider } from 'react-redux'`
* 引入store中的store
`import store from '../store/store'`  
* Provider使用
```js
return (
      <Container>
        <Layout>
        //在Provider 下的组件有效,store属性接收引入的store
          <Provider store={store}>
            <MyContext.Provider value="test">
              <Component {...pageProps} />
            </MyContext.Provider>
          </Provider>
        </Layout>
      </Container>
    );
```
* 引入react-redux 中的connect
`import { connect } from 'react-redux'`
* 使用connect:在page中export default时使用connect(mapStateToProps,mapDispatchToProps)(Index)
```js
const mapStateToProps = (state) => {
  return {
    counter: state.counter.count,
    username: state.user.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch(addNumCreate(6))
    },
    changeName: ()=> {
      dispatch(changeNameCreate())
    }
  }
}

export default connect(mapStateToProps)(Index);
```