<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import articleService from '../services/articleService'
import basketService from '../services/basketService'

const route = useRoute()
const router = useRouter()

const item = ref(articleService.getById(route.params.id))
const added = ref(false)

function goBack() {
  router.back()
}

function addToBasket() {
  basketService.add(item.value)
  added.value = true
  setTimeout(() => (added.value = false), 1500)
}
</script>

<template>
  <div class="page">
    <button class="back-button" @click="goBack">
      ← Retour
    </button>

    <div v-if="item" class="item-detail">
      <h1>{{ item.name }}</h1>
      <p class="description">{{ item.description }}</p>
      <p class="price">{{ item.price }} €</p>

      <button class="add-button" :class="{ added }" @click="addToBasket">
        {{ added ? '✓ Ajouté au panier' : 'Ajouter au panier' }}
      </button>
    </div>

    <div v-else class="not-found">
      <p>Article introuvable.</p>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.back-button {
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.4rem 0;
  margin-bottom: 1rem;
  transition: color 0.2s ease;
}

.back-button:hover {
  color: #42b983;
}

.item-detail {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.item-detail h1 {
  margin: 0 0 0.75rem;
  font-size: 1.8rem;
  color: #2c3e50;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.price {
  font-weight: 700;
  font-size: 1.5rem;
  color: #42b983;
  margin-bottom: 1.5rem;
}

.add-button {
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #42b983;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-button:hover {
  background-color: #369870;
}

.add-button.added {
  background-color: #27ae60;
}

.not-found {
  text-align: center;
  padding: 3rem;
  color: #999;
  font-size: 1.1rem;
}
</style>