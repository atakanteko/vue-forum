<template>
  <forum-list v-for="category in categories"
              :key="category.id"
              :forums="getForums(category.id)"
              :category-name="category.name"
  />
</template>

<script>
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList";

export default {
  name: "CategoryList",
  components: {
    ForumList,
  },
  props: {
    categories: {
      required: true,
      type: Array,
    },
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