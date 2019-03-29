<template>
<v-layout align-center justify-space-around row fill-height wrap>

    <v-card v-for="item in hotels" :key="item" data-aos="zoom-in-down" data-aos-duration="1900" data-aos-mirror="true" data-aos-anchor-placement="top-center" class=" mb-3 cards text-xs-center">
        <img v-bind:src="item.img" height="150px" width="150px">

        <v-card-title primary-title>
            <div>
                <div class="headline text-xs-center">{{ item.name }}</div>
                <span class="grey--text text-xs-center">{{ item.starRating }}</span>
            </div>
        </v-card-title>
    </v-card>

</v-layout>
</template>

<script>
import BottomNav from './BottomNav.vue'
import state from "./store.js";

export default {
    components: {
        BottomNav
    },
    data: () => ({

    }),

    computed: {
        hotels() {
            return this.$store.state.hotels ?
                this.$store.state.hotels : {};
        },

    },

    created() {
        console.log(this.$store.state.hotels)
    }
}
</script>
