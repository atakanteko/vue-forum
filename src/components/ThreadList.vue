<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in this.threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{name:'ThreadShow', params: {id: thread.id}}">{{thread.title}}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{userById(thread.userId).name}}</a> {{thread.publishedAt}}
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">
            {{thread.posts.length}} replies
          </p>
          <img :src="userById(thread.userId).avatar" class="avatar-medium">
          <div>
            <p class="text-xsmall">
              <a href="#">{{userById(thread.userId).name}}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "ThreadList",

  data() {
    return {
      posts: sourceData.posts,
      users: sourceData.users,
    }
  },
  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
  methods: {
    userById(userId) {
      return this.users.find(p => p.id === userId)
    }
  },
}
</script>

<style scoped>

</style>