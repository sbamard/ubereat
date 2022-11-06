<template>
    <div class="home">
        <div class="header">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">

            <div class="wrapper--input">
                <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez vous envie ?">
                <div class="search">
                    <router-link to="/src/pages/TheRestaurant.vue">
                        <div v-for="(restaurant, index) in search_restaurant" :key="index"
                            class="container--restaurant--search">
                            <div class="wrapper--img">
                                <img :src="restaurant.image" alt="">
                            </div>
                            <p>{{ restaurant.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="bannier" />
        <RestaurantRow v-for="(data, index) in data_restaurant" :key="index" :three_restaurant='data' />
    </div>
</template>


<script>
import MaBase from '../MaBase';
import RestaurantRow from '../components/RestaurantRow.vue';
import { onMounted, ref, watch } from 'vue';

export default {
    name: 'TheHome',
    components: {
        RestaurantRow
    },
    setup() {
        class Restaurant {
            constructor(name, note, image, drive_time) {
                this.name = name
                this.note = note
                this.image = image
                this.drive_time = drive_time
            }
        }

        let data_restaurant = ref([])
        let all_restaurant = []

        const makeDataRestaurant = () => {
            let three_restaurant = []

            for (const restaurant of MaBase) {
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)

                //on recup tous les restaurants pour la recherche
                all_restaurant.push(new_restaurant)


                if (three_restaurant.length === 2) {
                    three_restaurant.push(new_restaurant)
                    data_restaurant.value.push(three_restaurant)
                    three_restaurant = []
                } else {
                    three_restaurant.push(new_restaurant)
                }

            }
        }

        //user search restaurant
        let user_search_restaurant = ref('')
        let search_restaurant = ref([])

        watch(user_search_restaurant, (newValue) => {
            let regex = RegExp(newValue.toLowerCase())
            let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()))

            newValue == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant
        })

        //
        onMounted(makeDataRestaurant)

        //derniere chose du setup
        return {
            data_restaurant,
            user_search_restaurant,
            search_restaurant,
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    .header {
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 200px;
        }

        .wrapper--input {
            position: relative;

            input {
                background-color: #f6f6f6;
                border: none;
                height: 60px;
                width: 400px;
                outline: none;
                padding-left: 20px;
                font-size: 18px;
                border-radius: 10px 10px 0px 0px;
            }

            .search {
                position: absolute;
                top: 100%;
                width: 100%;
                background-color: #f6f6f6;
                border-radius: 0px 00px 10px 10px;

                .container--restaurant--search {
                    display: flex;
                    align-items: center;

                    &:hover {
                        background: #ffffff;
                        border-radius: 0px 00px 10px 10px;
                    }

                    .wrapper--img {
                        height: 60px;
                        width: 60px;
                        margin-right: 25px;
                        border-radius: 50%;
                        padding: 1px;
                        overflow: hidden;
                    }

                    img {
                        height: 100%;
                        width: auto;
                    }
                }

                p {
                    font-weight: 500;
                }
            }
        }

    }

    .bannier {
        height: 200px;
        width: 100%;
        background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
        background-size: cover;
        background-position: center center;
        margin-bottom: 20px;
    }
}
</style>