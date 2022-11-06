<template>
    <div class="restaurant--row">
        <h2 class="title">
            Nos restaurant
        </h2>

        <div class="wrapper--card">
            <RestaurantCardVue v-for="(card, index) in three_restaurant" :info_restaurant="card" :key="index" />
        </div>

    </div>
</template>

<script>
import RestaurantCardVue from './RestaurantCard.vue';

export default {
    name: "RestaurantRow",
    components: {
        RestaurantCardVue,
    },
    props:{
        three_restaurant: Array
    }
}
</script>

<style lang="scss" scoped>
.restaurant--row {

    .title{
        font-size: 2rem;
        padding-bottom: 20px;
       margin-top: 20px;
    }
    .wrapper--card {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>