<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="id" :to="{name: 'Category', params:{ id: id } }">
          {{ categoryName }}
        </router-link>
        <span v-else>{{ categoryName }}</span>
      </h2>

      <div v-for="forum in forums" :key="forum.id" class="forum-listing" >

        <div class="forum-details">
          <router-link class="text-xlarge"
                       :to="{ name: 'Forum', params: { id: forum.id } }"
          >
            {{ forum.name }}
          </router-link>
          <p>
            {{ forum.description }}
          </p>

        </div>


        <div class="threads-count">
          <p class="count">
            {{ forum.threads?.length ? forum.threads?.length : '0' }}
          </p> {{ forumThreadWord(forum) }}
        </div>

        <div class="last-thread">
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ForumList",
  props: {
    id:{
      required: false,
      type: String,
    },
    forums: {
      required: true,
      type: Array,
    },
    categoryName: {
      required: true,
      type: String
    }
  },
  methods: {
    forumThreadWord(forum) {
      if (forum.threads?.length){
        return forum.threads?.length > 1 ? 'threads' : 'thread'
      } else {
        return 'no threads'
      }
    }
  },
}
</script>

<style scoped>

</style>