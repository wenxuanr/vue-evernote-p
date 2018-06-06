<template>
  <div class="note-sidebar">
    <span class="btn add-note">添加笔记</span>
    <el-dropdown class="notebook-title" @command="handleCommand">
        <span class="el-dropdown-link">
          我的笔记本 <i class="iconfont icon-down"></i>
        </span>
      </el-dropdown>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in notebooks">
        </el-dropdown-item>
        <el-dropdown-item command="trash">
          回收站
        </el-dropdown-item>
      </el-dropdown-menu>
      <div class="menu">
        <div>更新时间</div>
        <div>标题</div>
        <ul class="notes">
          <li v-for="item in notes">
            <router-link :to="`/note?noteId=${item.id}`">
              <span class="date">
                {{item.friendlyCreatedAt}}
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
  export default {
    data(){
      return {
        notebooks :[{
          id:1,
          title:"hello"
        }, {
          id:2,
          title:"h2"
        }],
        notes: [{
          id:11,
          title:"第一个",
          updatedAt:'3分钟前'
        },
          {
            id:12,
            title:"第二个",
            updatedAt:"4分钟前"
          }]
      }
    },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style>

</style>
