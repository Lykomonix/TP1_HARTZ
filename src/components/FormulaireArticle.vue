<!-- components/ItemForm.vue -->
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const name = ref('')
const description = ref('')
const price = ref(null)

const error = ref('')

function handleSubmit() {
  error.value = ''

  if (!name.value.trim() || !description.value.trim() || price.value === null) {
    error.value = 'Merci de remplir tous les champs.'
    return
  }

  if (price.value <= 0) {
    error.value = 'Le prix doit être supérieur à 0.'
    return
  }

  emit('submit', {
    name: name.value.trim(),
    description: description.value.trim(),
    price: parseFloat(price.value)
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="field">
      <label for="name">Nom</label>
      <input
        id="name"
        v-model="name"
        type="text"
        placeholder="Ex: T-shirt blanc"
      />
    </div>

    <div class="field">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="description"
        rows="4"
        placeholder="Décrivez l'article..."
      ></textarea>
    </div>

    <div class="field">
      <label for="price">Prix (€)</label>
      <input
        id="price"
        v-model="price"
        type="number"
        step="0.01"
        min="0"
        placeholder="Ex: 19.90"
      />
    </div>

    <p v-if="error" class="error">{{ error }}</p>

    <button type="submit" class="submit-button">
      Ajouter l'article
    </button>
  </form>
</template>

<style scoped>
.field {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
}

.field label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #2c3e50;
  margin-bottom: 0.4rem;
}

.field input,
.field textarea {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s ease;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: #42b983;
}

.error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.submit-button {
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background-color: #42b983;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #369870;
}
</style>