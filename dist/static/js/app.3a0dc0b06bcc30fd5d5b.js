webpackJsonp([1],{"0TIr":function(t,e){},"3NoT":function(t,e){},F1Zp:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r=s("//Fk"),i=s.n(r),o=s("mtWM"),a=s.n(o),u=s("Jdfc"),c=s.n(u);function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new i.a(function(n,r){var i={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLocaleLowerCase()?i.params=s:i.data=s,a()(i).then(function(t){200===t.status?n(t.data):r(t.data)}).catch(function(t){console.error({msg:"网络异常"}),r({msg:"网络异常"})})})}a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL=c.a.baseURL,a.a.defaults.withCredentials=!0;var h="/auth/register",v="/auth/login",d="/auth/logout",g="/auth",m=function(t){var e=t.username,s=t.password;return l(h,"POST",{username:e,password:s})},p=function(t){var e=t.username,s=t.password;return l(v,"POST",{username:e,password:s})},f=function(){return l(d)},_=function(){return l(g)},w=new(s("TXMN").a),b={data:function(){return{username:"未登陆"}},created:function(){var t=this;w.$on("user_info",function(e){t.username=e.username}),_().then(function(e){e.isLogin&&(t.username=e.data.username)}).catch(function(t){console.log(t)})},computed:{slug:function(){return this.username.charAt(0)}}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var $={components:{Avatar:s("VU/8")(b,k,!1,function(t){s("F1Zp")},"data-v-24f9dad7",null).exports},methods:{logout:function(){var t=this;f().then(function(e){t.$router.push({path:"/login"})}).catch(function(t){console.log(t)})}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("Avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout",on:{click:this.logout}},[e("i",{staticClass:"iconfont icon-logout"})])],1)},staticRenderFns:[]};var C={name:"app",components:{Sidebar:s("VU/8")($,E,!1,function(t){s("QMNB")},"data-v-5e3890fc",null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var x=s("VU/8")(C,L,!1,function(t){s("0TIr")},null,null).exports,y=s("/ocq"),R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var T=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},R,!1,function(t){s("Ugm9")},"data-v-694cd902",null).exports;_().then(function(t){console.log(t)});var S={data:function(){return{isShowLogin:!0,isShowRegister:!1,register:{username:"",password:"",notice:"Please memorize your user name and password after you create your account",isError:!1},login:{username:"",password:"",notice:"Please type your username and password",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},registerAccount:function(){var t=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?(m({username:this.register.username,password:this.register.password}).then(function(e){t.register.isError=!1,t.register.notice="",w.$emit("user_info",{username:t.register.username}),t.$router.push({path:"notebooks"})}).catch(function(e){t.register.isError=!0,t.register.notice=e.msg}),this.register.isError=!1,void(this.register.notice="")):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},loginAccount:function(){var t=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?(p({username:this.login.username,password:this.login.password}).then(function(e){t.login.isError=!1,t.login.notice="",w.$emit("user_info",{username:t.login.username}),t.$router.push({path:"notebooks"})}).catch(function(e){t.login.isError=!0,t.login.notice=e.msg}),this.login.isError=!1,void(this.login.notice="")):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"main"}),t._v(" "),s("div",{staticClass:"form"},[s("h3",{on:{click:t.showRegister}},[t._v("\n            Create your account\n          ")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"register",class:{show:t.isShowRegister}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.register.isError}},[t._v(t._s(t.register.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.registerAccount}},[t._v("Create")])])]),t._v(" "),s("h3",{on:{click:t.showLogin}},[t._v("\n            Log in\n          ")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"login",class:{show:t.isShowLogin}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.login.isError}},[t._v(t._s(t.login.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.loginAccount}},[t._v("Log in")])])])],1)])])])])},staticRenderFns:[]};var A=s("VU/8")(S,U,!1,function(t){s("YrAz")},"data-v-2dcf869f",null).exports,F={name:"NoteBook",data:function(){return{msg:"笔记本列表"}},created:function(){var t=this;window.detail_this=this,_().then(function(e){e.isLogin||t.$router.push({path:"/login"})})}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notebook-list"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/note/1"}},[this._v("笔记本1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/note/2"}},[this._v("笔记本2")])],1)])])},staticRenderFns:[]};var j=s("VU/8")(F,N,!1,function(t){s("3NoT")},"data-v-42d1c97c",null).exports,P={name:"Login",data:function(){return console.log(this.$route),{msg:"This is detail about notebook..."}},created:function(){var t=this;_().then(function(e){e.isLogin||(console.log("1111"),t.$router.push({path:"/login"}))})}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var I=s("VU/8")(P,V,!1,function(t){s("tmrG")},"data-v-45d4b892",null).exports,M={name:"Login",data:function(){return{msg:"回收站笔记详情页"}},created:function(){var t=this;_().then(function(e){e.isLogin||t.$router.push({path:"/login"})})}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var H=s("VU/8")(M,W,!1,function(t){s("Qypi")},"data-v-c0ea6680",null).exports;n.a.use(y.a);var Q=new y.a({routes:[{path:"/",name:"HelloWorld",component:T},{path:"/login",name:"Login",component:A},{path:"/notebooks",name:"notebook",component:j},{path:"/note/:noteId",name:"notebookDetail",component:I},{path:"/trash/:noteId",name:"trash",component:H}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:Q,components:{App:x},template:"<App/>"})},QMNB:function(t,e){},Qypi:function(t,e){},Ugm9:function(t,e){},YrAz:function(t,e){},tmrG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3a0dc0b06bcc30fd5d5b.js.map