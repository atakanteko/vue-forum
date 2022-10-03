<template>
  <div class="col-full push-top">
    <h1>{{ category.name }}</h1>
  </div>
  <forum-list :category-name="category.name"
              :forums="getForums(category.id)"
  />
</template>

<script>
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList";

export default {
  name: "CategoryPage",
  components: {
    ForumList,
  },
  props: {
    id:{
      required: true,
      type: String,
    },
  },
  computed: {
    category() {
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getForums(categoryId) {
      return sourceData.forums.filter(forum => forum.categoryId === categoryId)
    }
  },
}
</script>

<style scoped>

</style>