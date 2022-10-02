<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import PostList from "@/components/PostList";

export default {
  name: "ThreadShow",
  components: {
    PostList,
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    thread() {
      return this.threads.find((t) => t.id === this.id)
    },
    threadPosts() {
      return this.posts.filter((t) => t.threadId === this.id)
    }
  }
}
</script>

<style scoped>

</style>