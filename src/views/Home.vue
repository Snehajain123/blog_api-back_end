<template>
  <div class="header">
    <h1>Blogs...</h1>
  </div>
  <body>
  <div class="row"> 
    <div v-for="list in lists" v-bind:key="list.id">
     <router-link :to="`/blog/${list.id}`">
      <article class="card">
       <h2>{{ list.title}}.... written by {{ list.owner }}. published at {{ list.created }}</h2>
        <div v-if="list.body.length<120">Welcome, {{ list.body }}</div>
        <div v-else>{{ list.body.substring(0,120)+"....continue reading" }}</div>
      </article>
     </router-link>
    </div>
    <Pagination @changeTitle="pre($event)" @passPage="next($event)"/>
  </div>
</body>
</template>
<script>
import axios from 'axios';
import Pagination from "../views/Pagination"

export default {
  name: 'Home',
  components: {
    Pagination,
},
  data() {
    return {
      lists: [],
      perpage: 2,
      next_url: "",
      previous: ""
    }
  },
  methods:{
    pre () {
    debugger
    if (!this.previous){return}
    this.get_posts(this.previous);
    },
    next(){
    debugger
    if (!this.next_url){return}
    this.get_posts(this.next_url);
    },
    async get_posts(url){
      const vm = this 
      await axios.get(url).then(function(response){
        vm.lists = response.data.results
        vm.next_url = response.data.next
        vm.previous = response.data.previous
      }
      )}
    },
  mounted(){
    const url = 'http://127.0.0.1:8000/posts/'
    this.get_posts(url);
  }
}
</script>

<style>
body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row a {
  text-decoration: none;
}
.card {
   background-color: white;
   padding: 20px;
   margin-top: 20px;
   text-align: left;
   text-deccoration: none;
}
.header {
  padding: 10px;
  font-size: 20px;
  text-align: left;
  background: #f1f1f1;
}
</style>