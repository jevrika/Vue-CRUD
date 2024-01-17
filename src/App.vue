<template>
  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eee;
}
</style>
