<template>
    <h2>Welcome to the Forum</h2>
    <category-list :categories="categories"/>
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from "@/components/CategoryList";

export default {
  name: "HomePage",
  components: {
    CategoryList
  },
  data() {
    return {
      categories: sourceData.categories,
    }
  },
}
</script>

<style scoped>

</style>