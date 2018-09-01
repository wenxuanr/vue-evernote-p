<template>
  <div id="note" class="detail">
    <NoteSideBar :curNote="curNote"  @update:notes = "val => notes = val"/>
    <div id="note-detail">
      <div class="note-empty" v-show="!curNote.id">
        请选择笔记
      </div>
      <div v-show="curNote.id">
        <div class="note-bar">
          <span>创建日期：{{curNote.createdAtFriendly}}</span>
          <span>更新日期：{{curNote.updatedAtFriendly}}</span>
          <span>{{statusText}}</span>
          <span class="iconfont icon-delete" @click="deleteNote"></span>
          <span class="iconfont icon-fullscreen"></span>
        </div>
        <div class="note-title">
          <input type="text" 
          v-model:value="curNote.title" 
          @input="updateNote" 
          placeholder="输入标题" 
          @keydown="statusText= 'typing...'">
        </div>
        <div class="editor">
          <textarea v-show="true" v-model:value="curNote.content" 
          @input="updateNote"  
          placeholder="输入内容，支持markdown"
          @keydown="statusText= 'typing...'"></textarea>
          <div class="preview markdown-body" v-html="" v-show="false"></div>
        </div>
      </div>
      </div>

  </div>
</template>


<script>
  import Auth from '@/apis/auth'
  import NoteSideBar from '@/components/NoteSideBar.vue'
  import Bus from '@/helpers/bus'
  //截流
  import _ from 'lodash'
  import Notes from '@/apis/notes'

  export default {
    components: {
      NoteSideBar
    },
    name:"NoteBookDetail",
    data(){
      return {
        curNote: {},
        notes: [],
        statusText: 'no change'
      }
    },
    created() {
      Auth.getInfo().then(res => {
        if (!res.isLogin) {
          this.$router.push({path : '/login'})
        }
      })
      Bus.$on('update:notes', val => {
        this.curNote = val.find(note => note.id === this.$route.query.noteId) || {};
      })
    },
    methods: {
      updateNote: _.debounce(function() {
          Notes.updateNotebook({noteId: this.curNote.id}, 
          { title: this.curNote.title, content: this.curNote.content})
          .then(data => this.statusText = 'saved')
      }, 300),
      deleteNote() {
        Notes.deleteNotebook({noteId: this.curNote.id}).then(data => this.$message(data.msg))
        this.notes.splice(this.notes.indexOf(this.curNote), 1)
        this.$router.replace({path: '/note'})
      }
    },
    beforeRouteUpdate(to, from, next) {
      this.curNote = this.notes.find(note => note.id == to.query.noteId) || {};
      next();
    }
  
  }
</script>


<style lang="less" scoped>
  @import url('../assets/css/note-detail.less');
</style>
