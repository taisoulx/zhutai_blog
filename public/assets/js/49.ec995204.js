(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{393:function(t,o,a){"use strict";a.r(o);var n=a(0),e=Object(n.a)({},(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),a("p",[a("code",[t._v("brew install mongodb")])]),t._v(" "),a("h2",{attrs:{id:"启动"}},[t._v("启动")]),t._v(" "),a("h3",{attrs:{id:"新建data目录"}},[t._v("新建data目录")]),t._v(" "),a("p",[a("code",[t._v("mkdir ~/project/mongodb/data/db")])]),t._v(" "),a("h3",{attrs:{id:"修改mongo配置文件mongod-conf"}},[t._v("修改mongo配置文件mongod.conf")]),t._v(" "),a("p",[a("code",[t._v("cd /usr/local/etc/")]),t._v("\n修改db地址")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Store data in /usr/local/var/mongodb instead of the default /data/db\ndbpath = /Users/mac/project/mongoDB/data/db\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"使用配置文件启动服务"}},[t._v("使用配置文件启动服务")]),t._v(" "),a("p",[a("code",[t._v("mongod --config /Usr/local/etc/mongod.conf")])]),t._v(" "),a("h3",{attrs:{id:"使用mongo-shell"}},[t._v("使用mongo shell")]),t._v(" "),a("p",[a("code",[t._v("mongo")])])])}),[],!1,null,null,null);o.default=e.exports}}]);