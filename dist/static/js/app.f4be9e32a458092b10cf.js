webpackJsonp([1],{"00wD":function(t,e){},"0TIr":function(t,e){},"40ee":function(t,e){},"7ea5":function(t,e){},"7fbt":function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"http://note-server.hunger-valley.com"}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.user.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var o=s("VU/8")({data:function(){return{user:{username:"Vincent"},slug:"H"}}},r,!1,function(t){s("7ea5")},"data-v-18d1040b",null).exports,i=s("//Fk"),a=s.n(i),u=s("mtWM"),l=s.n(u),c=s("Jdfc"),h=s.n(c);function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(n,r){var o={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLocaleLowerCase()?o.params=s:o.data=s,l()(o).then(function(t){200===t.status?n(t.data):r(t.data)}).catch(function(t){console.error({msg:"网络异常"}),r({msg:"网络异常"})})})}l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.a.defaults.baseURL=h.a,l.a.defaults.withCredentials=!0;var d="/auth/register",g="/auth/login",m="/auth/logout",p="/auth",f=function(t){var e=t.username,s=t.password;return v(d,"POST",{username:e,password:s})},_=function(t){var e=t.username,s=t.password;return v(g,"POST",{username:e,password:s})},w=function(){return v(m)},b=function(){return v(p)},k={components:{Avatar:o},methods:{logout:function(){w().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("Avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout",on:{click:this.logout}},[e("i",{staticClass:"iconfont icon-logout"})])],1)},staticRenderFns:[]};var E={name:"app",components:{Sidebar:s("VU/8")(k,C,!1,function(t){s("40ee")},"data-v-a0786e18",null).exports}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var x=s("VU/8")(E,$,!1,function(t){s("0TIr")},null,null).exports,L=s("/ocq"),R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var y=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},R,!1,function(t){s("Ugm9")},"data-v-694cd902",null).exports;b().then(function(t){console.log(t)});var S={data:function(){return{isShowLogin:!0,isShowRegister:!1,register:{username:"",password:"",notice:"Please memorize your user name and password after you create your account",isError:!1},login:{username:"",password:"",notice:"Please type your username and password",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},registerAccount:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?(f({username:this.register.username,password:this.register.password}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}),this.register.isError=!1,void(this.register.notice="")):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},loginAccount:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?(_({username:this.login.username,password:this.login.password}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}),this.login.isError=!1,void(this.login.notice="")):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"main"}),t._v(" "),s("div",{staticClass:"form"},[s("h3",{on:{click:t.showRegister}},[t._v("\n            Create your account\n          ")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"register",class:{show:t.isShowRegister}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.register.isError}},[t._v(t._s(t.register.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.registerAccount}},[t._v("Create")])])]),t._v(" "),s("h3",{on:{click:t.showLogin}},[t._v("\n            Log in\n          ")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"login",class:{show:t.isShowLogin}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.login.isError}},[t._v(t._s(t.login.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.loginAccount}},[t._v("Log in")])])])],1)])])])])},staticRenderFns:[]};var U=s("VU/8")(S,T,!1,function(t){s("ZlWt")},"data-v-b552a2f0",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notebook-list"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/note/1"}},[this._v("笔记本1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/note/2"}},[this._v("笔记本2")])],1)])])},staticRenderFns:[]};var F=s("VU/8")({name:"NoteBook",data:function(){return{msg:"笔记本列表"}}},j,!1,function(t){s("7fbt")},"data-v-aef4a9e8",null).exports,V={name:"Login",data:function(){return console.log(this.$route),{msg:"This is detail about notebook..."}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var P=s("VU/8")(V,A,!1,function(t){s("T0O1")},"data-v-077edd28",null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var W=s("VU/8")({name:"Login",data:function(){return{msg:"回收站笔记详情页"}}},N,!1,function(t){s("00wD")},"data-v-36ff1e0c",null).exports;n.a.use(L.a);var I=new L.a({routes:[{path:"/",name:"HelloWorld",component:y},{path:"/login",name:"Login",component:U},{path:"/notebooks",name:"notebook",component:F},{path:"/note/:noteId",name:"notebookDetail",component:P},{path:"/trash/:noteId",name:"trash",component:W}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:I,components:{App:x},template:"<App/>"})},T0O1:function(t,e){},Ugm9:function(t,e){},ZlWt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f4be9e32a458092b10cf.js.map