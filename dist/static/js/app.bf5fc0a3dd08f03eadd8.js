webpackJsonp([1],{"0TIr":function(t,e){},F1Zp:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s=n("//Fk"),r=n.n(s),i=n("mtWM"),a=n.n(i),u=n("Jdfc"),c=n.n(u);function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(o,s){var r={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLocaleLowerCase()?r.params=n:r.data=n,a()(r).then(function(t){200===t.status?o(t.data):s(t.data)}).catch(function(t){console.error({msg:"网络异常"}),s({msg:"网络异常"})})})}a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL=c.a.baseURL,a.a.defaults.withCredentials=!0;var d="/auth/register",h="/auth/login",v="/auth/logout",g="/auth",p=function(t){var e=t.username,n=t.password;return l(d,"POST",{username:e,password:n})},f=function(t){var e=t.username,n=t.password;return l(h,"POST",{username:e,password:n})},m=function(){return l(v)},_=function(){return l(g)},w=new(n("TXMN").a),b={data:function(){return{username:"未登陆"}},created:function(){var t=this;w.$on("user_info",function(e){t.username=e.username}),_().then(function(e){e.isLogin&&(t.username=e.data.username)}).catch(function(t){console.log(t)})},computed:{slug:function(){return this.username.charAt(0)}}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var E={components:{Avatar:n("VU/8")(b,k,!1,function(t){n("F1Zp")},"data-v-24f9dad7",null).exports},methods:{logout:function(){var t=this;m().then(function(e){t.$router.push({path:"/login"})}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("Avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout",on:{click:this.logout}},[e("i",{staticClass:"iconfont icon-logout"})])],1)},staticRenderFns:[]};var $={name:"app",components:{Sidebar:n("VU/8")(E,C,!1,function(t){n("QMNB")},"data-v-5e3890fc",null).exports}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var L=n("VU/8")($,A,!1,function(t){n("0TIr")},null,null).exports,y=n("/ocq"),T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var x=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},T,!1,function(t){n("Ugm9")},"data-v-694cd902",null).exports;_().then(function(t){console.log(t)});var D={data:function(){return{isShowLogin:!0,isShowRegister:!1,register:{username:"",password:"",notice:"Please memorize your user name and password after you create your account",isError:!1},login:{username:"",password:"",notice:"Please type your username and password",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},registerAccount:function(){var t=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?(p({username:this.register.username,password:this.register.password}).then(function(e){t.register.isError=!1,t.register.notice="",w.$emit("user_info",{username:t.register.username}),t.$router.push({path:"notebooks"})}).catch(function(e){t.register.isError=!0,t.register.notice=e.msg}),this.register.isError=!1,void(this.register.notice="")):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},loginAccount:function(){var t=this;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?(f({username:this.login.username,password:this.login.password}).then(function(e){t.login.isError=!1,t.login.notice="",w.$emit("user_info",{username:t.login.username}),t.$router.push({path:"notebooks"})}).catch(function(e){t.login.isError=!0,t.login.notice=e.msg}),this.login.isError=!1,void(this.login.notice="")):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"main"}),t._v(" "),n("div",{staticClass:"form"},[n("h3",{on:{click:t.showRegister}},[t._v("\n            Create your account\n          ")]),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"register",class:{show:t.isShowRegister}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),n("p",{class:{error:t.register.isError}},[t._v(t._s(t.register.notice))]),t._v(" "),n("div",{staticClass:"button",on:{click:t.registerAccount}},[t._v("Create")])])]),t._v(" "),n("h3",{on:{click:t.showLogin}},[t._v("\n            Log in\n          ")]),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"login",class:{show:t.isShowLogin}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),n("p",{class:{error:t.login.isError}},[t._v(t._s(t.login.notice))]),t._v(" "),n("div",{staticClass:"button",on:{click:t.loginAccount}},[t._v("Log in")])])])],1)])])])])},staticRenderFns:[]};var R=n("VU/8")(D,N,!1,function(t){n("YrAz")},"data-v-2dcf869f",null).exports,S=n("pFYg"),F=n.n(S);function P(t){var e=("object"===("undefined"==typeof dateStr?"undefined":F()(dateStr))?t:new Date(t)).getTime(),n=Date.now()-e,o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o}var U={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},j={getAll:function(){return new r.a(function(t,e){l(U.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),console.log(e.data),e.data.forEach(function(t){return t.friendlyCreatedAt=P(t.createdAt)}),t(e)}).catch(function(t){return console.log(t)})})},updateNotebook:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return l(U.UPDATE.replace(":id",t),"PATCH",{title:n})},deleteNotebook:function(t){return l(U.DELETE.replace(":id",t),"DELETE")},addNotebook:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return console.log({title:e}),console.log(e),l(U.ADD,"POST",{title:e})}};window.Notebooks=j;var V={name:"NoteBook",data:function(){return{notebooks:[],msg:"笔记本列表"}},created:function(){var t=this;window.detail_this=this,_().then(function(e){e.isLogin||t.$router.push({path:"/login"}),j.getAll().then(function(e){t.notebooks=e.data,console.log(t.notebooks)})})},methods:{onCreate:function(){var t=this,e=window.prompt("创建笔记本");null!==e&&""!==e.trim()?j.addNotebook({title:e}).then(function(e){console.log(e),e.data.friendlyCreatedAt=P(e.data.createdAt),alert(e.msg),t.notebooks.unshift(e.data)}):alert("笔记本不能为空")},onEdit:function(t){var e=window.prompt("修改标题",t.title);j.updateNotebook(t.id,{title:e}).then(function(t){console.log(t),alert(t.msg)}),t.title=e},onDelete:function(t){var e=this;window.confirm("您确定要删除吗？")&&j.deleteNotebook(t.id).then(function(n){console.log(n.msg),alert(n.msg),e.notebooks.splice(e.notebooks.indexOf(t),1)})}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[n("header",[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onCreate(e)}}},[n("i",{staticClass:"iconfont icon-plus"},[t._v("新建笔记本")])])]),t._v(" "),n("main",[n("div",{staticClass:"layout"},[n("h3",[t._v("\n        笔记本列表("+t._s(t.notebooks.length)+")\n      ")]),t._v(" "),n("div",{staticClass:"book-list"},t._l(t.notebooks,function(e){return n("router-link",{staticClass:"notebook",attrs:{to:"/note/1"}},[n("div",[n("span",{staticClass:"iconfont icon-notebook"}),t._v("\n              "+t._s(e.title)+"\n            "),n("span",[t._v(t._s(t.notebooks.noteCounts))]),t._v(" "),n("span",{staticClass:"action",on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.onEdit(e)}}},[t._v("编辑")]),t._v(" "),n("span",{staticClass:"action",on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.onDelete(e)}}},[t._v("删除")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(e.friendlyCreatedAt))])])])}))])])])},staticRenderFns:[]};var O=n("VU/8")(V,M,!1,function(t){n("NhFX")},"data-v-7d6e75d8",null).exports,I={name:"Login",data:function(){return console.log(this.$route),{msg:"This is detail about notebook..."}},created:function(){var t=this;_().then(function(e){e.isLogin||(console.log("1111"),t.$router.push({path:"/login"}))})}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var W=n("VU/8")(I,H,!1,function(t){n("hflO")},"data-v-1327b7fe",null).exports,Q={name:"Login",data:function(){return{msg:"回收站笔记详情页"}},created:function(){var t=this;_().then(function(e){e.isLogin||t.$router.push({path:"/login"})})}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var z=n("VU/8")(Q,Y,!1,function(t){n("Qypi")},"data-v-c0ea6680",null).exports;o.a.use(y.a);var B=new y.a({routes:[{path:"/",name:"HelloWorld",component:x},{path:"/login",name:"Login",component:R},{path:"/notebooks",name:"notebook",component:O},{path:"/note/:noteId",name:"notebookDetail",component:W},{path:"/trash/:noteId",name:"trash",component:z}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:B,components:{App:L},template:"<App/>"})},NhFX:function(t,e){},QMNB:function(t,e){},Qypi:function(t,e){},Ugm9:function(t,e){},YrAz:function(t,e){},hflO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bf5fc0a3dd08f03eadd8.js.map