<!-- views/ItemCard.vue -->
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import articleService from '../services/articleService';

const route = useRoute()

const item = ref(articleService.getById(route.params.id))
</script>

<template>
  <div v-if="item" class="item-detail">
    <h1>{{ item.name }}</h1>
    <p class="description">{{ item.description }}</p>
    <p class="price">{{ item.price }} €</p>
  </div>
  <div v-else class="not-found">
    <p>Article introuvable.</p>
  </div>
</template>

<style scoped>
.item-detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
}

.item-detail h1 {
  margin-bottom: 0.5rem;
}

.description {
  color: #666;
  margin-bottom: 1rem;
}

.price {
  font-weight: 700;
  font-size: 1.3rem;
  color: #42b883;
}

.not-found {
  text-align: center;
  padding: 3rem;
  color: #999;
}
</style>