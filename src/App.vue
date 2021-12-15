<template>
  <div class="nav">
  <form class="example" action="">
  <input type="text" placeholder="Search.." v-model="search">
  
  <button type="submit"><i class="fa fa-search"></i></button>
  <div v-for="post in posts" v-bind:key="post.id"></div>
  </form>
    <router-link to="/posts">Home</router-link> 
    <router-link to="/profile">Profile</router-link>
  </div>
  <router-view/>
</template>

<script>
import { defineComponent } from "vue";

export default {
 defineComponent: {
  name: "App",
 },
 data() {
    return {
      posts: [],
      search: ''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav a.router-link-exact-active {
  color: blue;
}
</style>
