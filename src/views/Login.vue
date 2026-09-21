<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import accountService from '../services/accountService'

const router = useRouter()
const role = ref(accountService.getRole())

function becomeAdmin() {
  accountService.setAdmin()
  role.value = 'admin'
}

function becomeUser() {
  accountService.setUser()
  role.value = 'user'
}

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h1>Connexion</h1>
      <p class="current-role">
        Rôle actuel : <span :class="role">{{ role === 'admin' ? 'Administrateur' : 'Utilisateur' }}</span>
      </p>

      <button v-if="role !== 'admin'" class="role-button admin" @click="becomeAdmin">
        Passer en Administrateur
      </button>

      <button v-if="role !== 'user'" class="role-button user" @click="becomeUser">
        Passer en Utilisateur
      </button>

      <button class="home-button" @click="goHome">
        Retour à l'accueil
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
}

.login-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  text-align: center;
  max-width: 350px;
  width: 100%;
}

.login-card h1 {
  margin: 0 0 1rem;
  color: #2c3e50;
}

.current-role {
  margin-bottom: 1.5rem;
  color: #666;
}

.current-role span {
  font-weight: 700;
}

.current-role span.admin {
  color: #e74c3c;
}

.current-role span.user {
  color: #42b983;
}

.role-button {
  display: block;
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin-bottom: 0.75rem;
  transition: background-color 0.2s ease;
}

.role-button.admin {
  background-color: #e74c3c;
}

.role-button.admin:hover {
  background-color: #c0392b;
}

.role-button.user {
  background-color: #42b983;
}

.role-button.user:hover {
  background-color: #369870;
}

.home-button {
  display: block;
  width: 100%;
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.7rem;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.2s ease;
}

.home-button:hover {
  background-color: #f0f0f0;
}
</style>