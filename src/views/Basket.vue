<!-- views/Basket.vue -->
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import basketService from '../services/basketService'
import Panier from '../components/Panier.vue'

const router = useRouter()
const items = ref(basketService.getAll())

const total = computed(() =>
  items.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
)

function increase(id) {
  const item = items.value.find((i) => i.id === id)
  if (item) {
    basketService.updateQuantity(id, item.quantity + 1)
    refresh()
  }
}

function decrease(id) {
  const item = items.value.find((i) => i.id === id)
  if (item) {
    basketService.updateQuantity(id, item.quantity - 1)
    refresh()
  }
}

function removeItem(id) {
  basketService.remove(id)
  refresh()
}

function clearBasket() {
  basketService.clearAll()
  refresh()
}

function refresh() {
  items.value = basketService.getAll()
}

function goToArticles() {
  router.push('/articles')
}
</script>

<template>
  <div class="basket-page">
    <h1>Mon panier</h1>

    <div v-if="items.length" class="basket-content">
      <Panier
        :items="items"
        @increase="increase"
        @decrease="decrease"
        @remove="removeItem"
      />

      <div class="basket-summary">
        <p class="total">Total : <span>{{ total.toFixed(2) }} €</span></p>
        <div class="summary-actions">
          <button class="clear-button" @click="clearBasket">
            Vider le panier
          </button>
          <button class="checkout-button">
            Passer commande
          </button>
        </div>
      </div>
    </div>

    <div v-else class="empty-basket">
      <p>Votre panier est vide.</p>
      <button class="browse-button" @click="goToArticles">
        Voir les articles
      </button>
    </div>
  </div>
</template>

<style scoped>
.basket-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.basket-page h1 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.basket-summary {
  border-top: 2px solid #eee;
  padding-top: 1.25rem;
}

.total {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.total span {
  color: #42b983;
}

.summary-actions {
  display: flex;
  gap: 1rem;
}

.clear-button {
  flex: 1;
  background: none;
  border: 1px solid #999;
  color: #666;
  border-radius: 6px;
  padding: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.clear-button:hover {
  background-color: #f0f0f0;
}

.checkout-button {
  flex: 2;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.checkout-button:hover {
  background-color: #369870;
}

.empty-basket {
  text-align: center;
  padding: 3rem 1rem;
  color: #999;
}

.empty-basket p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.browse-button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.browse-button:hover {
  background-color: #369870;
}
</style>