<script setup>
import { ref } from 'vue'
import ArticleItem from './ArticleItem.vue'

const items = ref([
  {
    id: 1,
    name: "T-shirt blanc",
    description: "T-shirt en coton bio, coupe classique.",
    price: 19.9
  },
  {
    id: 2,
    name: "Jean slim",
    description: "Jean slim bleu délavé, taille haute.",
    price: 49.9
  },
  {
    id: 3,
    name: "Sweat à capuche",
    description: "Sweat gris chiné, doublure polaire.",
    price: 39.9
  },
  {
    id: 4,
    name: "Baskets blanches",
    description: "Baskets en cuir synthétique, semelle confort.",
    price: 59.9
  },
  {
    id: 5,
    name: "Casquette noire",
    description: "Casquette ajustable, logo brodé.",
    price: 14.9
  }
])
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