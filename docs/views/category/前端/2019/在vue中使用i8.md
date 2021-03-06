---
title: 在vue中使用i18
date: 2019-06-29
sidebar: auto
tags:
 - i18
 - vue
categories: 
 - 前端
---

# element-ui实现双语切换功能

## 这里主要是vue2+elementUI+i18n 国际化语言切换

### 1、首先安装i18n：npm install vue-i18n --save

### 2、在src建目录，并附上代码：

#### cn.js代码：
`
    import zhLocale from 'element-ui/lib/locale/lang/zh-CN' //引入element语言包
    const cn = {
        message: {
            'aa':'你好',
            'riqi':'日期',
            'text': '好好学习，天天向上',
        },
        ...zhLocale
    }
    export default cn;
`
#### en.js代码：
```javascript 
    import enLocale from 'element-ui/lib/locale/lang/en' //引入element语言包
    const en = {
        message: {
            'aa':'hello',
            'riqi':'date',
            'text': 'Good good study, Day day up',
        },
        ...enLocale
    }
    export default en;
```

index.js代码：
```javascript
import en from './en';
import cn from './cn';
export default {
    en: en,
    cn: cn
}

```
#### i18n.js代码： 
```javascript
import Vue from 'vue'
import locale from 'element-ui/lib/locale';
import VueI18n from 'vue-i18n'
import messages from './langs'
Vue.use(VueI18n)
//从localStorage获取语言选择。
const i18n = new VueI18n({
    locale: localStorage.lang || 'en', //初始未选择默认 cn 中文
    messages,
})
locale.i18n((key, value) => i18n.t(key, value)) //兼容element
 
export default i18n
```
### 3、在main.js里引入：

```javascript
import i18n from './i18n/i18n';
 
 
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n, //很重要，别忘记
    components: { App },
    template: '<App/>'
})
```
### 4、组件中使用：
``````javascript
<!-- i18n -->
<template>
    <div>
        <span>{{$t('message.text')}}</span>  //使用方式1
        <p>{{title}}</p>
        <span v-text="$t('message.text')"></span> //使用方式2
        <el-select @change="langChange" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
 
<script>
export default {
    data () {
        return {
            title:this.$t('message.text'),//使用方式3，需刷新起效
            options:[
                {
                value: 'cn',
                label: '中文'
                }, {
                value: 'en',
                label: 'English'
                }
            ]
        }
    },
    methods: {
        //语言切换
        langChange(e){
            localStorage.setItem('lang',e);
            this.$i18n.locale = e;
            window.location.reload()
        }
    }
}
</script>
```