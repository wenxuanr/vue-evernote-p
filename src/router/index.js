import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NoteBookList from '@/components/NoteBookList'
import NoteBookDetail from '@/components/NoteBookDetail'
import TrashDetail from '@/components/TrashDetail'




Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/notebooks',
      name:"notebook",
      component: NoteBookList
    },
    {
      path:'/note/',
      name:"notebookDetail",
      component: NoteBookDetail
    },
    {
      path:'/trash/',
      name:"trash",
      component: TrashDetail
    },
  ]
})
