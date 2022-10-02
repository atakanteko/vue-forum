<template>
    <h2>Welcome to the Forum</h2>
    <thread-list :threads="threads"/>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from "@/components/ThreadList";

export default {
  name: "HomePage",
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