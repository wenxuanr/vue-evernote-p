<template>
  <div class="note-sidebar">
    <el-dropdown class="notebook-title" @command="handleCommand" placement="bottom">
      <span class="el-dropdown-link">{{currentBook.title}} <i class="iconfont icon-down"></i></span>
      <span class="btn add-note">添加笔记</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in notebooks" :command="item.id">
        {{item.title}}
      </el-dropdown-item>
      <el-dropdown-item command="trash">
        回收站
      </el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
      <ul class="notes">
        <li v-for="item in notes">
          <router-link :to="`/note?noteId=${item.id}&notebookId=${currentBook.id}`">
              <span class="date">
                {{item.updatedAtFriendly}}
              </span>
            <span class="title">
                {{item.title}}
              </span>
          </router-link>
        </li>
      </ul>
    </div>


  </div>
</template>


<script>
  import Notebooks from '@/apis/notebooks';
  import Notes from '@/apis/notes';

  window.Notes = Notes;
  export default {
    data(){
      return {
        notebooks : [],
        notes:[],
        currentBook:{}
      }
    },
    created() {
      Notebooks.getAll().then(res => {
        this.notebooks = res.data;
        this.currentBook = this.notebooks.find(notebook => notebook.id === this.$route.query.notebookId) || this.notebooks[0] || {};
        return Notes.getAll({notebookId : this.currentBook.id})
      }).then(res => {
        this.notes =  res.data;
      })

    },
    methods: {
      handleCommand(notebookId) {
        if (notebookId === 'trash') {
          return this.$router.push({path: '/trash'})
        }

        if (notebookId != 'trash') {
          Notes.getAll({notebookId})
            .then(res=> {
              console.log(res);
              this.notes = res.data;
              this.currentBook = this.notebooks.find(notebook => notebook.id === notebookId);
            })
        }
      }
    }
  }
</script>

<style lang="less">
  @import url('../assets/css/note-sidebar.less');
  .el-dropdown-link {
    cursor: pointer;
    color: #0a2643;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
