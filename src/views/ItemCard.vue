<!-- views/ItemCard.vue -->
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const item = {
  id: 1,
  name: "T-shirt blanc",
  description: "T-shirt en coton bio, coupe classique, disponible en plusieurs tailles.",
  price: 19.9
}
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
</style>