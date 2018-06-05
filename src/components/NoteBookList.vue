<template>
  <!--<div id="notebook-list">-->
    <!--<h1>{{msg}}</h1>-->
    <!--<ul>-->
      <!--<li>-->
        <!--<router-link to="/note/1">笔记本1</router-link>-->
      <!--</li>-->
      <!--<li>-->
        <!--<router-link to="/note/2">笔记本2</router-link>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate">
        <i class="iconfont icon-plus">新建笔记本</i>
      </a>
    </header>
    <main>
      <div class="layout">
        <h3>
          笔记本列表({{notebooks.length}})
        </h3>
        <div class="book-list">
          <router-link to="/note/1" class="notebook" v-for="item in notebooks">
            <div>
              <span class="iconfont icon-notebook">
              </span>
                {{item.title}}
              <span>{{notebooks.noteCounts}}</span>
              <span class="action" @click.stop.prevent="onEdit(item)">编辑</span>
              <span class="action" @click.stop.prevent="onDelete(item)">删除</span>
              <span class="date">{{item.friendlyCreatedAt}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
  import Auth from '@/apis/auth'
  import Notebooks from '@/apis/notebooks'
  import notebooks from "../apis/notebooks"
  import {friendlyDate} from '@/helpers/util'

  window.Notebooks = Notebooks;
  export default {
    name:'NoteBook',
    data() {
      return {
        notebooks:[],
        msg: '笔记本列表'
      }
    },
    created() {
      window.detail_this = this;
      Auth.getInfo().then(res => {
        if (!res.isLogin) {
          this.$router.push({path : '/login'})
        }
        Notebooks.getAll()
          .then(res => {
            this.notebooks =  res.data;
            console.log(this.notebooks);
          })
      })
    },
    methods: {
      onCreate() {
        let title = window.prompt('创建笔记本')
        if (title === null || title.trim() === '') {
          alert("笔记本不能为空")
          return
        }
        Notebooks.addNotebook({title}).then(res=>{
          console.log(res);
          res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt)
          alert(res.msg);
          this.notebooks.unshift(res.data);
        })
      },
      onEdit(notebook) {
        let title = window.prompt('修改标题', notebook.title);
        Notebooks.updateNotebook(notebook.id, {title}).then(res=> {
          console.log(res);
          alert(res.msg);
        })
        notebook.title = title;
      },
      onDelete(notebook) {
        let isConfirm = window.confirm("您确定要删除吗？")
        if (isConfirm) {
            Notebooks.deleteNotebook(notebook.id).then(res => {
            console.log(res.msg);
            alert(res.msg);
            this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
          })
        }
      }
    }
  }
</script>

<style lang = "less" scoped>
  @import url('../assets/css/notebook-list.less');
</style>
