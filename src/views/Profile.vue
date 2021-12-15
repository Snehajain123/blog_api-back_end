<template>

  <h1>{{ title }}</h1>

  <Pagination @changeTitle="ChangeT($event)" @passPage="Passp($event)"/>

</template>
<script>
import Pagination from "../views/Pagination"
export default{
name:'App',
components: {
    Pagination,
},
data()
{
   return{
     title:[]
         }
},
methods:{
    ChangeT(title)
    {
      this.title=title;
    },
    Passp(title){
    this.title=title;
    }
}
}
</script>