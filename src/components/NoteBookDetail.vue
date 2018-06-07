<template>
  <div id="note" class="detail">
    <NoteSideBar/>
    <div id="note-detail">
      <div class="note-bar">
        <span>创建日期：2天前</span>
        <span>更新日期：1分钟前</span>
        <span>已保存</span>
        <span class="iconfont icondelete"></span>
        <span class="iconfont icon-fullscreen"></span>
      </div>
      <div class="note-title">
        <input type="text" placeholder="输入标题">
      </div>
      <div class="editor">
        <textarea v-show="true" placeholder="输入内容，支持markdown"></textarea>
        <div class="preview markdown-body" v-html="" v-show="false"></div>
      </div>
    </div>
  </div>
</template>


<script>
  import Auth from '@/apis/auth'
  import NoteSideBar from '@/components/NoteSideBar.vue'

  export default {
    components: {
      NoteSideBar
    },
    name:"NoteBookDetail",
    data(){
      console.log(this.$route);
      return {
        msg: "This is detail about notebook..."
      }
    },
    created() {
      Auth.getInfo().then(res => {
        if (!res.isLogin) {
          console.log("1111");
          this.$router.push({path : '/login'})
        }
      })
    }
  }
</script>


<style lang="less" scoped>
  @import url('../assets/css/note-detail.less');
</style>
