<template>
  <div class="container">
    <page-home/>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import PageHome from "@/components/PageHome";

export default {
  name: 'HelloWorld',
  components: {
    PageHome,
  },
  props: {
    msg: String
  },
  created() {
    console.log(sourceData)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
