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

                    <v-card>
                        <v-card-title>
                            Hotels
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="this.hotels" :search="search">
                            <template v-slot:items="props">
                                <td>{{ props.item.name }}</td>
                                <td class="text-xs-right">{{ props.item.starRating }}</td>
                                <td class="text-xs-right" v-for="item in props.item.facilities" :key ="item">{{ item  + ' ,' }}</td>
                            </template>
                            <v-alert v-slot:no-results :value="true" color="error" icon="warning">
                                Your search for "{{ search }}" found no results.
                            </v-alert>
                        </v-data-table>
                    </v-card>

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
        drawer: null,
        search: '',
        headers: [{
                text: 'Hotel Name',
                align: 'left',
                sortable: false,
                value: 'name'
            },
            {
                text: 'Star rating',
                value: 'starRating',
                                align: 'left',

            },
            {
                text: 'Facilities',
                value: 'facilities',
                                align: 'left',

            }
        ],
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

    created() {
        console.log(this.$store.state.hotels)
    }
}
</script>
