<template>
  <div id="note-detail">
    <h1>{{msg}} : {{ $route.params.noteId }}</h1>
  </div>
</template>


<script>
  export default {
    name:"Login",
    data(){
      console.log(this.$route);
      return {
        msg: "This is detail about notebook..."
      }
    }
  }
</script>


<style scoped>
    h1 {
      color: red;
    }
</style>
