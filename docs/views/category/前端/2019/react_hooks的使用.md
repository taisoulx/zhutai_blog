---
title: react hooks的使用
date: 2019-07-06
sidebar: auto
tags:
 - react
 - react-hooks
categories: 
 - 前端
---
:::tip
# 什么是Hooks
让函数组件具有类组件的能力

## state hooks
* api 
  * useState
  * useReducer
  * useEffect 
:::
<!-- more -->

### useState
`const [ name,setName] = useState(0)`
* useState(0)中0为初始值
* setName(1)改变Name的值
* setName((c)=> c+1) 接收一个回调函数,传入的值c调用时name的值

### useReducer
```js
// 定义一个reducer方法
function countReducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}
    // useReducer 接收一个reducer方法,返回变量和dispatch方法
 const [num, dispatchNum] = useReducer(countReducer, 0);


 // 使用:通过dispatch  action的方式使用
 dispatchNum({ type: "add" });
```
### useEffect

```js
//如果不传第二个参数,那么每次state变化都会调用useEffect
//打印顺序:'effect deteched' 'effect invoked'
useEffect(() => {
    console.log('effect invoked')
    return () => {
      //常用于卸载一些事件监听
      console.log('effect deteched')
    };
    //
  },[]);
```
官方建议,在useEffect中使用任何外部定义的变量,都要通过第二个参数传入,称之为依赖,effect会根据传入的依赖选择是否重新执行

### useLayoutEffect
* 在dom渲染之前执行,没有特殊需求一般不使用.
* 如果useLayoutEffect执行时间比较长,就会有页面卡或速度慢的感觉,所以一般不使用

### context hook(useContext)
* 需要使用最新的context api

* 1.在lib下新建my_context.js
```js
import React ,{} from 'react';
export default React.createContext('')
```
* 2.在_app.js下进行全局配置
  * 引入
`import MyContext from "../lib/my_context";`
  * 全局配置
```js
render() {
    const { Component, pageProps } = this.props;
    console.log(Component);
    return (
      <Container>
        <Layout>
          <MyContext.Provider value="test">
            <Component {...pageProps} />
          </MyContext.Provider>
        </Layout>
      </Container>
    );
  }
}
```
 * 使用
   * 在要使用的子组件中引入,引入useContext
`import React, {useContext } from "react";`
  * 引入定义的MyContext
`import MyContext from '../../lib/my_context'`
  * 使用
`const value = useContext(MyContext)`
```js
render(
  <p>{value}</p>
)
```

### useMemo&&useCallback
useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。

下面我们通过一个实例，来理解下 useMemo的用法。
#### usememo
* 父组件
```js
function App() {
  const [name, setName] = useState('名称')
  const [content,setContent] = useState('内容')
  return (
      <>
        <button onClick={() => setName(new Date().getTime())}>name</button>
        <button onClick={() => setContent(new Date().getTime())}>content</button>
        <Button name={name}>{content}</Button>
      </>
  )
}
```
* 子组件
```js
function Button({ name, children }) {
  function changeName(name) {
    console.log('11')
    return name + '改变name的方法'
  }

  const otherName =  changeName(name)
  return (
      <>
        <div>{otherName}</div>
        <div>{children}</div>
      </>

  )
}
```
当我们点击父组件的按钮的时候，子组件的name和children都会发生变化。

不管我们是改变name或者content的值，我们发现 changeName的方法都会被调用。
是不是意味着 我们本来只想修改content的值，但是由于name并没有发生变化，所以无需执行对应的changeName方法。但是发现他却执行了。 

* 下面我们使用useMemo进行优化

优化之后的子组件
```js
function Button({ name, children }) {
  function changeName(name) {
    console.log('11')
    return name + '改变name的方法'
  }

const otherName =  useMemo(()=>changeName(name),[name])
  return (
      <>
        <div>{otherName}</div>
        <div>{children}</div>
      </>

  )
}
```
这个时候我们点击 改变content值的按钮，发现changeName 并没有被调用。
但是点击改变name值按钮的时候，changeName被调用了。
所以我们可以使用useMemo方法 避免无用方法的调用，当然一般我们changName里面可能会使用useState来改变state的值，那是不是就避免了组件的二次渲染。
达到了优化性能的目的

#### useCallback

useCallback跟useMemo比较类似，但它返回的是缓存的函数。我们看一下最简单的用法：

`const fnA = useCallback(fnB, [a])`

上面的useCallback会将我们传递给它的函数fnB返回，并且将这个结果缓存；当依赖a变更时，会返回新的函数。

使用场景是：有一个父组件，其中包含子组件，子组件接收一个函数作为props；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新
```js
import React, { useState, useCallback, useEffect } from 'react';
function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');

    const callback = useCallback(() => {
        return count;
    }, [count]);
    return <div>
        <h4>{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}

function Child({ callback }) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        {count}
    </div>
}
```
