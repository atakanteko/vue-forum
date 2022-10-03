<template>
    <h2>Welcome to the Forum</h2>
    <forum-list :forums="forums"/>
</template>

<script>
import sourceData from '@/data.json'
import ForumList from "@/components/ForumList";

export default {
  name: "HomePage",
  components: {
    ForumList
  },
  data() {
    return {
      forums: sourceData.forums,
    }
  },
}
</script>

<style scoped>

</style>