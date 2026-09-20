<script setup>
import { ref, computed, onMounted } from 'vue'
import ListeArticles from '../components/ListeArticles.vue'
import articleService from '../services/articleService.js'
import BarreRecherche from '../components/BarreRecherche.vue'

const items = ref([])
const searchQuery = ref('')

function loadItems() {
  items.value = articleService.getAll()
}

function handleDelete(id) {
  articleService.remove(id)
  loadItems()
}

function handleSearch(query) {
  searchQuery.value = query
}

const filteredItems = computed(() =>
  items.value.filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

onMounted(() => {
  loadItems()
})
</script>

<template>
  <BarreRecherche @search="handleSearch" />
  <ListeArticles :items="filteredItems" @delete="handleDelete" />
</template>