<template lang="html">
<div class="footer">
  <button type="button" @click='passEventpre'>previous</button>
  <button type="button" @click='passEventnext'>next</button>
</div>
</template>

<script>

export default {
  name:'Pagination',
  methods:{
    passEventpre()
    {
    debugger
      this.$emit('changeTitle','next')
    },
    passEventnext() {
    debugger
    this.$emit('passPage','previous')
    }
  }
}
</script>
<style>
.footer {
  margin-top: 20px;
}
</style>