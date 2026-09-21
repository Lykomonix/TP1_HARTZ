<!-- views/AddItem.vue -->
<script setup>
import { useRouter } from 'vue-router'
import articleService from '../services/articleService'
import ItemForm from '../components/FormulaireArticle.vue'

const router = useRouter()

function handleSubmit(itemData) {
  articleService.create(itemData)
  router.push('/articles')
}
</script>

<template>
  <div class="add-item-page">
    <div class="add-item-card">
      <h1>Ajouter un article</h1>
      <ItemForm @submit="handleSubmit" />
    </div>
  </div>
</template>

<style scoped>
.add-item-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.add-item-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  max-width: 450px;
  width: 100%;
}

.add-item-card h1 {
  margin: 0 0 1.5rem;
  color: #2c3e50;
  text-align: center;
}
</style>