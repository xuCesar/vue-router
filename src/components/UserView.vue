<template>
    <div>
      <p>user</p>
      <div class="user-list">
        <router-link :to="`/user/` + item.id" :key="index" v-for="(item,index) in userList"> {{item.userName}} </router-link>
      </div>
    </div>
</template>

<script>
let data = [
  {
    id: 1,
    userName: 'leo1',
    sex: '男',
    hobby: '写代码'
  },
  {
    id: 2,
    userName: 'leo1',
    sex: '男',
    hobby: '唱歌'
  },
  {
    id: 3,
    userName: 'leo3',
    sex: '男',
    hobby: '读书'
  }
]
export default {
  name: 'UserView',
  data () {
    return {
      userList: data
    }
  }
}
</script>

<style scoped>

</style>
