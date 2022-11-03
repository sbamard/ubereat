<template>
    <RestaurantCard/>
</template>

<script>
import RestaurantCard from './components/RestaurantCard.vue'
export default {
  name: 'App',
  components: {
    RestaurantCard
  }
}
</script>

<style>
@import url('./style/reset.css');
@import url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
