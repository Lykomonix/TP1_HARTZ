<!-- components/BasketItemsList.vue -->
<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['increase', 'decrease', 'remove'])
</script>

<template>
  <div class="basket-list">
    <div v-for="item in items" :key="item.id" class="basket-item">
      <div class="item-info">
        <h2>{{ item.name }}</h2>
        <p class="unit-price">{{ item.price }} € / unité</p>
      </div>

      <div class="quantity-control">
        <button @click="$emit('decrease', item.id)">−</button>
        <span>{{ item.quantity }}</span>
        <button @click="$emit('increase', item.id)">+</button>
      </div>

      <p class="subtotal">{{ (item.price * item.quantity).toFixed(2) }} €</p>

      <button class="remove-button" @click="$emit('remove', item.id)">
        Supprimer
      </button>
    </div>
  </div>
</template>

<style scoped>
.basket-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.basket-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.item-info h2 {
  margin: 0 0 0.25rem;
  font-size: 1.05rem;
  color: #2c3e50;
}

.unit-price {
  margin: 0;
  font-size: 0.85rem;
  color: #999;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.quantity-control button {
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.quantity-control button:hover {
  background-color: #eee;
}

.quantity-control span {
  min-width: 20px;
  text-align: center;
  font-weight: 600;
}

.subtotal {
  min-width: 70px;
  text-align: right;
  font-weight: 700;
  color: #42b983;
}

.remove-button {
  background: none;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.remove-button:hover {
  background-color: #e74c3c;
  color: white;
}
</style>