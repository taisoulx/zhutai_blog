---
title: vscode 格式化reactjs
date: 2019-07-02
tags:
 - react
categories: 
 - 前端
 - 工具
---

vscode 配置插件支持 react js 格式化

<!-- more -->
# 1. 插件及相关配置
需安装插件列表

`Prettier - Code formatter`


`Prettier`
EditorConfig for VS Code


## EditorConfig
需添加文件配置
以下文件需要添加到项目根目录

* .editorconfig
```js
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

* .prettierignore
``` js
**/*.md
**/*.svg
package.json
.umi
.umi-production
```

* .prettierrc

```js
{
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ]
}
```
需添加依赖

## prettier
执行下面命令添加
`npm install --save-dev --save-exact prettier` 或者 `yarn add -D -E prettier`

# 2. 使用方法
打开需要格式化的文件，使用如下快捷键
windows: CTRL + ALT + F
mac: SHIFT + ALT + F