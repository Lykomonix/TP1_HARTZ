<script setup>
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1 class="logo">gevanDtruk</h1>
      <p class="tagline">Donnez une seconde vie à vos objets</p>

      <p class="description">
        gevanDtruk est une plateforme simple pour acheter et vendre des articles
        d'occasion entre particuliers. Parcourez les annonces, trouvez la perle rare
        ou mettez en ligne vos propres objets en quelques clics.
      </p>

      <router-link to="/articles" class="cta-button">
        Voir les articles
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
}

.hero {
  max-width: 600px;
  text-align: center;
}

.logo {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.tagline {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #369870;
}
</style>