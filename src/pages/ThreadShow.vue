<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost"/>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import { PostList, PostEditor } from "@/components";

export default {
  name: "ThreadShow",
  components: {
    PostList,
    PostEditor
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
      newPostText:''
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
  },
  methods: {
    addPost(eventData) {
      const post = {...eventData.post, threadId: this.id }
      this.thread.posts.push(post.id)
      this.posts.push(post);
    }
  },
}
</script>

<style scoped>

</style>