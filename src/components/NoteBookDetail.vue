<template>
  <div id="note" class="detail">
    <NoteSideBar/>
    <div id="note-detail">
      <h1>{{msg}} : {{ $route.query.noteId }}</h1>
      <h1>{{msg}} : {{ $route.query.notebookId }}</h1>
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
    h1 {
      color: red;
    }
</style>
