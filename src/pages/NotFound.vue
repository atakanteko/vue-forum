<template>
  <div class="not-found">
    <div>
      <h1>Not Found</h1>
      <router-link :to="{name:'Home'}">Read some cool threads</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
.not-found{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>