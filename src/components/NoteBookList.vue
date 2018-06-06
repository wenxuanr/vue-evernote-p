<template>
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
        this.$prompt('请输入标题', '创建笔记本', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,30}$/,
          inputErrorMessage: '标题不能为空，且不能超过30个字符'
        }).then(({ value }) => {
          return Notebooks.addNotebook({title : value});
        }).then(res => {
          res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt)
          this.notebooks.unshift(res.data);
          this.$message.success(res.msg);
        })
      },
      onEdit(notebook) {
        let title = ''
        this.$prompt('请输入标题', '修改笔记本', {
          inputValue: notebook.title,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,30}$/,
          inputErrorMessage: '标题不能为空，且不能超过30个字符'
        }).then(({ value }) => {
          title = value;
          return Notebooks.updateNotebook(notebook.id, {title});
        }).then(res => {
          notebook.title = title
          this.$message.success(res.msg);
        })
      },
      onDelete(notebook) {
        this.$confirm('你确定要删除吗', '删除笔记本', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=> {
          return Notebooks.deleteNotebook(notebook.id)
        })
          .then((res) => {
          this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
          this.$message({
            type: 'success',
            message: res.msg
          });
        })

      }
    }
  }
</script>

<style lang = "less" scoped>
  @import url('../assets/css/notebook-list.less');
</style>
