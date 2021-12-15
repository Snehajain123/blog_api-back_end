<template>
  <div class="post" v-if="post">
  <h1>{{ post.title }}</h1>
    <article class="card">
     <div class="content-wrapper">
       <h2>{{ post.body }}</h2>
       <h2>Auther:{{ post.owner}}<br>
       </h2>
       <button type="submit" @comments="detail($event)"><i class="fa fa-comment">{{post.no_of_comments}}</i></button>
     </div>
    </article>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Post',
  data () {
    return {
      post: null,
    }
  },
  async mounted() {
  const id = this.$route.params.id
  const url = 'http://127.0.0.1:8000/posts/'+ id + '/'
  await axios.get(url)
  .then(response => (this.post = response.data))
  }
}
</script>

<style>
.card {
   background-color: white;
   padding: 50px;
   margin-top: 50px;
   margin-left:200px;
   margin-right:200px;
   text-align: left;
   text-deccoration: none;
}
.card a {
  text-decoration: none;
}
</style>