<template>
      <EditForm  :id="Number(id)"/>
</template>

<script setup lang="ts">
import EditForm from '../components/EditForm.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const { id } = route.params;

</script>

<style>
</style>
