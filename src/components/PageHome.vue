<template>
  <h2 class="text-center">Welcome to the Forum</h2>
  <ThreadList :threads="threads"/>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from "@/components/ThreadList";

export default {
  name: "PageHome",
  components: {
    ThreadList
  },
  data() {
    return {
      threads: sourceData.threads,
    }
  },
}
</script>

<style scoped>

</style>