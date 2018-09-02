import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
// import NoteBookList from '@/components/NoteBookList'
// import NoteBookDetail from '@/components/NoteBookDetail'
// import TrashDetail from '@/components/TrashDetail'




Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      alias:'/notebooks',
      component: () => import('@/components/NoteBookList')
    },
    {
      path:'/login',
      name:'Login',
      component: () => import('@/components/Login')
    },
    // {
    //   path:'/notebooks',
    //   name:"notebook",
    //   component: NoteBookList
    // },
    {
      path:'/note/',
      name:"notebookDetail",
      component: () => import('@/components/NoteBookDetail')
    }
    // {
    //   path:'/trash/',
    //   name:"trash",
    //   component: TrashDetail
    // },
  ]
})
