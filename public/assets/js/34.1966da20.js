(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{377:function(t,e,r){"use strict";r.r(e);var s=r(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"进入超级管理员模式"}},[t._v("进入超级管理员模式")]),t._v(" "),r("p",[r("code",[t._v("sudo su")])]),t._v(" "),r("h1",{attrs:{id:"第二步"}},[t._v("第二步")]),t._v(" "),r("p",[r("code",[t._v("docker ps -a | grep \"Exited\" | awk '{print $1 }'|xargs docker stop")])]),t._v(" "),r("h1",{attrs:{id:"第三步"}},[t._v("第三步")]),t._v(" "),r("p",[r("code",[t._v("docker ps -a | grep \"Exited\" | awk '{print $1 }'|xargs docker rm")])]),t._v(" "),r("h1",{attrs:{id:"第四步"}},[t._v("第四步")]),t._v(" "),r("p",[r("code",[t._v("docker images|grep none|awk '{print $3 }'|xargs docker rmi")])]),t._v(" "),r("h1",{attrs:{id:"查看镜像目录"}},[t._v("查看镜像目录")]),t._v(" "),r("p",[r("code",[t._v("docker images")])])])}),[],!1,null,null,null);e.default=o.exports}}]);