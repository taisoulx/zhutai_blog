---
title: nextjs的使用
date: 2019-07-07
tags:
 - react
 - nextjs
categories: 
 - 前端
---

# nextjs的基础使用

## 安装
```vb
mkdir demo
cd demo
npm init
yarn add react react-dom next
```
## 在package.json 设置启动脚本
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  ```
## 开始hello world
### 主目录新建文件夹pages(固定写法)
`mkdir pages`
`cd pages`
### 新建文件index.js
`mkdir index.js`
```js
export default () => <div>Welcome to next.js!</div>
```

### 回到主目录，启动
`yarn dev`

## 路由
### 实现
只要在 pages 文件夹下创建的文件，都会默认生成以文件名命名的路由。新建pages/about.js
```js
export default function About() {
  return (
    <div>
      <p>This is the about page</p>
    </div>
  )
}
```
在浏览器输入http://localhost:3000/about，就能看到相应页面
### 路由跳转
* 引入Link
`import Link from 'next/link'`
* 路由传参数
```js
import Link from 'next/link'
const Index = ()=>{
    return(
        <div>
            <Link href='/about?title=hello'><a>to about</a></Link>
            <p>welcome to next.js!</p>
        </div>
    )
}
export default Index
```
* 接收参数
```js
import { withRouter } from 'next/router'
const About = ({router})=>{
    return(
        <div>
        <p>This is the About page</p>
    <div><span>hello+{router.query.title}</span></div>
      </div>
    )
}
export default withRouter(About)
```
特别说明：
传值{router}实际是函数接收一个props,此处结构后{}表示props，所以此处同理为
```js
import { withRouter } from 'next/router'
const About = (props)=>{
    return(
        <div>
        <p>This is the About page</p>
    <div><span>hello+{props.router.query.title}</span></div>
      </div>
    )
}
export default withRouter(About)
```
结构拆分传值的好处是可以传更多的值
``js
import { withRouter } from "next/router";

const About = ({router,name,time}) => {

    return (
    <div>
      <p>This is the About page</p>
      <div>
    <span>hello+{router.query.title}+{name}+{time}</span>
      </div>
    </div>
  );
};

About.getInitialProps = async ctx => {
    const moment = await import('moment')
  
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: "taisoulx",
          time: moment.default(Date.now()- 10*1000).fromNow()
        });
      }, 2000);
    });
  
    return await promise;
  };


export default withRouter(About);
```

再扩展，getInitialProps
官网叙述：
* 当页面渲染时加载数据，我们使用了一个异步方法getInitialProps。它能异步获取 JS 普通对象，并绑定在props上；
* 当服务渲染时，getInitialProps将会把数据序列化，就像JSON.stringify。所以确保getInitialProps返回的是一个普通 JS 对象，而不是Date, Map 或 Set类型。
* 当页面初始化加载时，getInitialProps只会加载在服务端。只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行getInitialProps。
注意：getInitialProps将不能使用在子组件中。只能使用在pages页面中。