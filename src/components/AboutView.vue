<template>
    <div class="content">
      <ul class="nav">
        <!--<router-link v-for="item in nav" :key="item.id" :to="`${item.url}`" tag="li" exact>-->
        <router-link v-for="item in nav" :key="item.id" :to="{name: item.name}" tag="li" :exact="item.id == 4 ? true : false">
          <i class=""></i>
          <p>{{item.page}}</p>
        </router-link>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {
      nav: [
        { id: 4, page: 'study', url: '/about', name: 'AboutView' },
        { id: 5, page: 'work', url: '/about/work', name: 'work' },
        { id: 6, page: 'hobby', url: '/about/hobby', name: 'hobby' }
      ]
    }
  }
}
</script>

<style scoped>
  .content{
    width: 1024px;
    margin: 0 auto;
  }
  .nav{
    width: 1024px;
    height: 30px;
    margin: 0;
    padding: 0;
    margin: 0 auto;
  }
  .nav li{
    list-style: none;
    float: left;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    margin-right: 20px;
  }
</style>
