---
title: github OAuth第三方授权登录
date: 2019-06-30
sidebar: auto
tags:
 - OAuth
 - koa
categories: 
 - 前端
---

# 一、第三方登录的原理
所谓第三方登录，实质就是 OAuth 授权。用户想要登录 A 网站，A 网站让用户提供第三方网站的数据，证明自己的身份。获取第三方网站的身份数据，就需要 OAuth 授权。
* A 网站让用户跳转到 GitHub。
* GitHub 要求用户登录，然后询问"A 网站要求获得 xx 权限，你是否同意？"
* 用户同意，GitHub 就会重定向回 A 网站，同时发回一个授权码。
* A 网站使用授权码，向 GitHub 请求令牌。
* GitHub 返回令牌.
* A 网站使用令牌，向 GitHub 请求用户数据。

<!-- more -->

# 二、首先要去github去注册一个OAuth application

应用的名称随便填，主页 URL 填写http://localhost:8080，跳转网址填写 http://localhost:8080/oauth/redirect。

# 三、实现说明
## 1、进入流程
跳转链接中，需要带上application的client_id和本网站的回调地址
访问gitub授权登录的页面地址为：https://github.com/login/oauth/authorize
```html
<body>
        <a id="login">Login with GitHub</a>

<script>
  // fill in your cliend_id
  const client_id = '434d6a22a029fe020f38';

  const authorize_uri = 'https://github.com/login/oauth/authorize';
  const redirect_uri = 'http://localhost:3000/oauth/redirect';

  const link = document.getElementById('login');
  link.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
</script>

</body>
```

## 2、回调后的流程
(后端使用koa)
### 1)获取code
`const requestToken = ctx.request.query.code;`
### 2)使用code请求token
```js
const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  });
```
### 3)从返回值中读取accessToken
`const accessToken = tokenResponse.data.access_token;`
### 4)截止目前已经获取到accessToken,现在使用accessToken去获取一些信息
```js
const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  });
  ```