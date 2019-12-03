(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{357:function(r,e,t){"use strict";t.r(e);var i=t(0),a=Object(i.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("p",[r._v("作为 arch 衍生版，最大的好处就是他庞大的软件仓库了～安装是极其方便的")]),r._v(" "),t("h2",{attrs:{id:"使用-pacman"}},[r._v("使用 pacman")]),r._v(" "),t("p",[t("code",[r._v("sudo pacman -S rabbitmq rabbitmqadmin")])]),r._v(" "),t("h2",{attrs:{id:"使用-yarourt"}},[r._v("使用 yarourt")]),r._v(" "),t("p",[t("code",[r._v("yarourt -S rabbitmq rabbitmqadmin")])]),r._v(" "),t("h2",{attrs:{id:"或自己选择相应的版本"}},[r._v("或自己选择相应的版本")]),r._v(" "),t("p",[t("code",[r._v("yarourt rabbitmq")])]),r._v(" "),t("h1",{attrs:{id:"启动"}},[r._v("启动")]),r._v(" "),t("h2",{attrs:{id:"开启管理模块"}},[r._v("开启管理模块")]),r._v(" "),t("p",[t("code",[r._v("sudo rabbitmq-plugins enable rabbitmq_management")])]),r._v(" "),t("h1",{attrs:{id:"启动-2"}},[r._v("启动")]),r._v(" "),t("p",[t("code",[r._v("sudo rabbitmq-server")])]),r._v(" "),t("h2",{attrs:{id:"启动报错"}},[r._v("启动报错")]),r._v(" "),t("p",[t("code",[r._v('args: [] format: "Error when reading /var/lib/rabbitmq/.erlang.cookie: eacces" label: {error_logger,error_msg} 2019-05-05 09:16:40.312473 crash_report #{label=>{proc_lib,crash},report=>[[{initial_call,{auth,init,[\'Argument__1\']}},{pid,<0.59.0>},{registered_name,[]},{error_info,{error,"Error w hen reading /var/lib/rabbitmq/.erlang.cookie: eacces",[{auth,init_cookie,0,[{file,"auth.erl"},{line,286}]},{auth,init,1,[{file,"auth.erl"},{line,140}]},{gen_server,init_it,2,[{file,"gen_ser ver.erl"},{line,374}]},{gen_server,init_it,6,[{file,"gen_server.erl"},{line,342}]},{proc_lib,init_p_do_apply,3,[{file,"proc_lib.erl"},{line,249}]}]}},{ancestors,[net_sup,kernel_sup,<0.46.0> ]},{message_queue_len,0},{messages,[]},{links,[<0.57.0>]},{dictionary,[]},{trap_exit,true},{status,running},{heap_size,987},{stack_size,27},{reductions,937}],[]]} 2019-05-05 09:16:40.312741 supervisor_report #{label=>{supervisor,start_error},report=>[{supervisor,{local,net_sup}},{errorContext,start_error},{reason,{"Error when reading /var/lib/rabbi tmq/.erlang.cookie: eacces",[{auth,init_cookie,0,[{file,"auth.erl"},{line,286}]},{auth,init,1,[{file,"auth.erl"},{line,140}]},{gen_server,init_it,2,[{file,"gen_server.erl"},{line,374}]},{ge n_server,init_it,6,[{file,"gen_server.erl"},{line,342}]},{proc_lib,init_p_do_apply,3,[{file,"proc_lib.erl"},{line,249}]}]}},{offender,[{pid,undefined},{id,auth},{mfargs,{auth,start_link,[]} },{restart_type,permanent},{shutdown,2000},{child_type,worker}]}]} ......')]),r._v("\n解决，问题在于 Error when reading /var/lib/rabbitmq/.erlang.cookie: eacces，修改权限即可")]),r._v(" "),t("p",[r._v("sudo chown rabbitmq:rabbitmq /var/lib/rabbitmq/.erlang.cookie"),t("br"),r._v("\nsudo chmod 600 /var/lib/rabbitmq/.erlang.cookie\n启动")]),r._v(" "),t("p",[t("code",[r._v("sudo rabbitmq-server")])]),r._v(" "),t("h1",{attrs:{id:"docker-安装-——-推荐"}},[r._v("docker 安装 —— 推荐")]),r._v(" "),t("h2",{attrs:{id:"安装"}},[r._v("安装")]),r._v(" "),t("p",[t("code",[r._v("docker pull rabbitmq:3.7-management")])]),r._v(" "),t("h2",{attrs:{id:"启动-3"}},[r._v("启动")]),r._v(" "),t("p",[t("code",[r._v("docker run -d --hostname localhost --name myrabbit -p 15672:15672 -p 5672:5672 rabbitmq:3.7-management")])]),r._v(" "),t("p",[r._v("-d 后台进程运行\nhostname RabbitMQ主机名称\nname 容器名称\n-p port:port 本地端口:容器端口\n-p 15672:15672 http访问端口\n-p 5672:5672 amqp访问端口")]),r._v(" "),t("h1",{attrs:{id:"测试"}},[r._v("测试")]),r._v(" "),t("p",[r._v("访问 http://127.0.0.1:15672 ，默认账号密码 guest。")])])}),[],!1,null,null,null);e.default=a.exports}}]);