(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{393:function(o,e,n){"use strict";n.r(e);var r=n(0),s=Object(r.a)({},(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[n("h2",{attrs:{id:"docker切换到国内源"}},[o._v("docker切换到国内源")]),o._v(" "),n("p",[o._v("在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址即可\n"),n("code",[o._v("http://hub-mirror.c.163.com")])]),o._v(" "),n("h2",{attrs:{id:"下载mongodb的docker镜像"}},[o._v("下载MongoDB的docker镜像")]),o._v(" "),n("p",[n("code",[o._v("docker pull mongo:4")])]),o._v(" "),n("h2",{attrs:{id:"查看下载的镜像"}},[o._v("查看下载的镜像")]),o._v(" "),n("p",[n("code",[o._v("docker images")])]),o._v(" "),n("h2",{attrs:{id:"启动一个mongodb服务器容器"}},[o._v("启动一个MongoDB服务器容器")]),o._v(" "),n("p",[n("code",[o._v("docker run --name mymongo -v /mymongo/data:/data/db -d mongo:4")]),o._v("\n--name mymongo --\x3e 容器名字\n-v /mymongo/data:/data/db --\x3e挂在数据目录\n-d --\x3e 后台运行容器")]),o._v(" "),n("p",[o._v("====>报错处理：")]),o._v(" "),n("h3",{attrs:{id:"错误码："}},[o._v("错误码：")]),o._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[o._v("docker: Error response from daemon: Mounts denied:\nThe path /mymongo/data\nis not shared from OS X and is not known to Docker.\nYou can configure shared paths from Docker -> Preferences... -> File Sharing.\nSee https://docs.docker.com/docker-for-mac/osxfs/#namespaces for more info.\n")])]),o._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[o._v("1")]),n("br"),n("span",{staticClass:"line-number"},[o._v("2")]),n("br"),n("span",{staticClass:"line-number"},[o._v("3")]),n("br"),n("span",{staticClass:"line-number"},[o._v("4")]),n("br"),n("span",{staticClass:"line-number"},[o._v("5")]),n("br")])]),n("p",[o._v("用docker container ls -a查看是存在一个为mongo:4的image\n使用docker restart [CONTAINER ID]\n再使用docker ps查看，已经在运行了\n使用docker logs mymongo也能输出日志\n使用docker run --link mymongo:mongo -p 8081:8081 mongo-express，也能打开http://localhost:8081/")]),o._v(" "),n("h2",{attrs:{id:"查看docker容器状态"}},[o._v("查看docker容器状态")]),o._v(" "),n("p",[n("code",[o._v("docker ps")])]),o._v(" "),n("h2",{attrs:{id:"mongo-express-是一个基于网络的mongodb数据库管理界面"}},[o._v("Mongo Express 是一个基于网络的MongoDB数据库管理界面")]),o._v(" "),n("h2",{attrs:{id:"下载-mongo-express镜像"}},[o._v("下载 mongo-express镜像")]),o._v(" "),n("p",[n("code",[o._v("docker pull mongo-express")])]),o._v(" "),n("h2",{attrs:{id:"运行mongo-express"}},[o._v("运行mongo-express")]),o._v(" "),n("p",[n("code",[o._v("docker run --link mymongo:mongo -p 8081:8081 mongo-express")]),o._v("\ndocker run --link mymongo:mongo -p 8081:8081 mongo-express")]),o._v(" "),n("h2",{attrs:{id:"mongo-shell是用来操作mongodb的javascript客户端界面"}},[o._v("mongo shell是用来操作MongoDB的JavaScript客户端界面")]),o._v(" "),n("h2",{attrs:{id:"运行mongo-shell"}},[o._v("运行mongo shell")]),o._v(" "),n("p",[n("code",[o._v("docker exec -it mymongo mongo")])])])}),[],!1,null,null,null);e.default=s.exports}}]);