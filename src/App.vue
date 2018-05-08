<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
          <router-link v-for="item in nav" :key="item.id" :to="`${item.url}`" tag="li" :exact="item.id == 1 ? true : false">
              <i class=""></i>
              <p>{{item.page}}</p>
          </router-link>
      </ul>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: [
        { id: 1, page: 'Home', url: '/' },
        { id: 2, page: 'Doc', url: '/doc' },
        { id: 3, page: 'About', url: '/about' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.nav-box{
  width: 1024px;
  height: 30px;
  margin: 0 auto;
  background-color: #eee;
}
.nav{
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
.nav li p{
  line-height: 0;
}
.nav li a{
  color: #000;
  text-decoration: none;
}
.is-active{
  background-color: #f60;
  color: #fff;
}
</style>
