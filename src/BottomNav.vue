<template>
<v-footer dark>
    <v-layout class="navLayout m-0 p-0" row wrap>
        <v-card flat tile class="orange accent-3 white--text text-xs-center navCard">
            <v-card-text>
                <v-btn v-for="(icon, index) in icons" :key="index" class="mx-3 white--text" icon>
                    <router-link class="links" :to="`#${icon.link}`" replace>
                        <v-icon v-on:click="redirectPage(icon.link)" size="24px">{{ icon.icon }}
                        </v-icon>
                    </router-link>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text bottomText">
                &copy;2018 — <strong>MtlJ1991</strong>
            </v-card-text>
        </v-card>

    </v-layout>

</v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: [{
                    icon: 'fab fa-facebook',
                    link: 'https://www.facebook.com/Mtlj1991'
                },
                {
                    icon: 'fab fa-twitter',
                    link: 'https://twitter.com/Mtlj1991'
                },
                {
                    icon: 'fab fa-linkedin',
                    link: 'https://www.linkedin.com/in/matt-jones-a97530146/'
                },
                {
                    icon: 'fab fa-instagram',
                    link: 'https://www.instagram.com/mtlj1991/'
                },
            ],
            clipped: false,
            drawer: true,
            fixed: false,
            items: [{
                    icon: 'apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'bubble_chart',
                    title: 'Inspire',
                    to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },

    methods: {
        redirectPage(externalLink) {
            location.assign(externalLink);
        }
    }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 1.5s;
}

.page-enter,
.page-leave-active {
    opacity: 0;
    transform: scale(1);
}

.links {
    color: whitesmoke;
}

.text,
.bottomText {
    font-family: 'Montserrat' !important;
}

.navCard {
    width: 100%;
}
</style>
