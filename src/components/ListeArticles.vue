<script setup>
import { ref, onMounted } from 'vue'
import ArticleItem from './ArticleItem.vue'
import articleService from '../services/articleService.js'

const items = ref([])

function loadItems() {
  items.value = articleService.getAll()
}

function handleDelete(id) {
  articleService.remove(id)
  loadItems()
}

onMounted(() => {
  loadItems()
})

</script>

<template>
  <div class="item-list">
    <ArticleItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :description="item.description"
      :price="item.price"
      @delete="handleDelete"
    />
  </div>
</template>

<style scoped>
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>