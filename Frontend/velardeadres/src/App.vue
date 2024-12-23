<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isAuthenticated = ref(false);

const checkAuth = () => {
  isAuthenticated.value = localStorage.getItem('token') !== null;
};

onMounted(() => {
  checkAuth();
});

watch(() => localStorage.getItem('token'), checkAuth);
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav v-if="isAuthenticated">
      <RouterLink to="/">Direcciones</RouterLink>
      <RouterLink to="/nuevo">Nuevo</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #42b983;
}
</style>