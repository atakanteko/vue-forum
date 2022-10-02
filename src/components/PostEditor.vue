<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea id="thread_content"
                  v-model="text"
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
</template>

<script>

export default {
  name: "PostEditor",
  data() {
    return {
      text:''
    }
  },
  methods: {
    save() {
      const postId = '-KsjWehQ--ap' + Math.random();
      const post = {
        id:postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
      }
      this.$emit('save', { post } )
      this.newPostText=''
    }
  },
}
</script>

<style scoped>

</style>