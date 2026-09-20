<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])

const query = ref('')

function handleInput() {
  emit('search', query.value)
}
</script>

<template>
  <div class="barre-recherche">
    <input
      type="text"
      v-model="query"
      @input="handleInput"
      placeholder="Rechercher un article..."
    />
  </div>
</template>

<style scoped>
.barre-recherche {
  padding: 1rem;
}

.barre-recherche input {
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.barre-recherche input:focus {
  outline: none;
  border-color: #42b883;
}
</style>