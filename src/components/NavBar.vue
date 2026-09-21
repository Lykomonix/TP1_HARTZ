<script setup></script>
<template>
    <nav class="navbar">
        <router-link to="/">Accueil</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/ajouter">Ajouter un article</router-link>
        <router-link to="/panier">Panier</router-link>
        <router-link to="/login">Connexion</router-link>
        <router-link to="/admin">Admin</router-link>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background-color: #2c3e50;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.4rem 0.2rem;
    position: relative;
    transition: color 0.2s ease;
}

.navbar a:hover {
    color: #42b983;
}

/* soulignement animé au survol */
.navbar a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #42b983;
    transition: width 0.2s ease;
}

.navbar a:hover::after {
    width: 100%;
}

/* style du lien actif (route courante) */
.navbar a.router-link-exact-active {
    color: #42b983;
    font-weight: 700;
}
</style>