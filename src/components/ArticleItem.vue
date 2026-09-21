<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number 
})

const emit = defineEmits(['delete'])

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
        <button @click="$emit('delete', id)">Supprimer</button>
    </div>
</template>

<style scoped>
.item-card {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 1.25rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.item-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

.item-card h2 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    color: #2c3e50;
}

.item-card .description {
    flex-grow: 1;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
    margin-bottom: 1rem;

    /* limite à 3 lignes avec ellipsis */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.item-card .price {
    font-weight: 700;
    font-size: 1.1rem;
    color: #42b983;
    margin-bottom: 1rem;
}

.item-card button {
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.9rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: 0.4rem;
}

.item-card button:first-of-type {
    background-color: #42b983;
    color: white;
}

.item-card button:first-of-type:hover {
    background-color: #369870;
}

.item-card button:last-of-type {
    background-color: transparent;
    color: #e74c3c;
    border: 1px solid #e74c3c;
}

.item-card button:last-of-type:hover {
    background-color: #e74c3c;
    color: white;
}
</style>