<script setup>
import ArticleItem from './ArticleItem.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

defineEmits(['delete'])
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
      @delete="$emit('delete', $event)"
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