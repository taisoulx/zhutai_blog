(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{342:function(e,t,o){"use strict";o.r(t);var p=o(0),s=Object(p.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("首先在终端中查看MySQL的依赖项：\n"),o("code",[e._v("dpkg --list|grep mysql")])]),e._v(" "),o("p",[e._v("卸载：\n"),o("code",[e._v("sudo apt-get remove mysql-common")])]),e._v(" "),o("p",[e._v("卸载：\n"),o("code",[e._v("sudo apt-get autoremove --purge mysql-server-5.7")])]),e._v(" "),o("p",[e._v("清除残留数据：\n"),o("code",[e._v("dpkg -l|grep ^rc|awk '{print$2}'|sudo xargs dpkg -P")])]),e._v(" "),o("p",[e._v("再次查看MySQL的剩余依赖项：\n"),o("code",[e._v("dpkg --list|grep mysql")])]),e._v(" "),o("p",[e._v("继续删除剩余依赖项，如：\n"),o("code",[e._v("sudo apt-get autoremove --purge mysql-apt-config")])]),e._v(" "),o("p",[e._v("至此已经没有了MySQL的依赖项，彻底删除，Good Luck")])])}),[],!1,null,null,null);t.default=s.exports}}]);