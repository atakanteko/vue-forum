<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea id="thread_content"
                    v-model="newPostText"
                    class="form-input"
                    name="content"
                    rows="8"
                    cols="140"
          />
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">Cancel</button>
          <button class="btn btn-blue"
                  type="submit"
                  name="Publish">
            Publish
          </button>
        </div>
      </form>
    </div>
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
    addPost() {
      const postId = '-KsjWehQ--ap' + Math.random();
      const post = {
        id:postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.thread.posts.push(postId)
      this.posts.push(post);
      this.newPostText=''
    }
  },
}
</script>

<style scoped>

</style>