<template>
  <div id="note-detail">
    <h1>{{msg}} : {{ $route.params.noteId }}</h1>
  </div>
</template>


<script>
  import Auth from '@/apis/auth'

  export default {
    name:"Login",
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


<style scoped>
    h1 {
      color: red;
    }
</style>
