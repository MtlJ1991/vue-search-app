import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels: [
      {
        name: "hotelOne",
        starRating: 5,
        facilities: ["car park", "pool"],
        img: "https://picsum.photos/458/354",
      },
      {
        name: "hotelTwo",
        starRating: 3,
        facilities: ["gym", "bar"],
        img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      },
      {
        name: "hotelThree",
        starRating: 1,
        facilities: ["empty pool"],
        img: "https://images.unsplash.com/photo-1496616481515-56fd775bb2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      }
    ]

  },
  mutations: {

  },
  actions: {

  }
})
