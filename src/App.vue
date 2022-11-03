<template>
  <RestaurantCard />
</template>

<script>
import RestaurantCard from "./components/RestaurantCard.vue";

export default {
  name: 'App',
  components: {
    RestaurantCard
  }
}
</script>

<style>
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
