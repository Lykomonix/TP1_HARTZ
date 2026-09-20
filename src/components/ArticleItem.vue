<script setup>
const props = defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number 
})

function handleClick() {
  this.$router.push(`/articles/${props.id}`)
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