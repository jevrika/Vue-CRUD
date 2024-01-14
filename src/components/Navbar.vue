<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar">
    <router-link class="link" :to="{ name: 'Home' }">Books</router-link>
    <router-link class="link" :to="{ name: 'AddBook' }"> Add a new book</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  text-align: center;
  margin: 40px auto;
}
.link {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
  color:black
}

.router-link-active{
  border-bottom: 2px solid #b6d7f7;
  padding-bottom: 2px;
}


</style>
