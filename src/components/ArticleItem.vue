<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number 
})


const router = useRouter()

function handleClick() {
  router.push(`/articles/${props.id}`)
}

</script>
<template>
    <div class="item-card" :id="id">
        <h2>{{ name }}</h2>
        <p class="description">{{ description }}</p>
        <p class="price">{{ price }} €</p>
        <button @click="handleClick">Voir plus</button>
    </div>
</template>