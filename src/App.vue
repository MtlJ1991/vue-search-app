<template>
<v-app id="inspire" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
        <v-list dense>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Hotel search application</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <v-tooltip right>
                        <span>Source</span>
                    </v-tooltip>
             {{ this.hotels }}
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
    <BottomNav />
</v-app>
</template>

<script>
import BottomNav from './BottomNav.vue'
import state from "./store.js";


export default {
    components: {
        BottomNav
    },
    data: () => ({
        drawer: null
    }),
    props: {
        source: String
    },
    computed: {
        hotels() {
            return this.$store.state.hotels ?
                this.$store.state.hotels : {};
        },
    },

    created () {
      console.log(this.$store.state.hotels)
    }
}
</script>
