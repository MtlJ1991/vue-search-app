import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels: [
      {
        name: "hotelOne",
        starRating: 5,
        facilities: ["car park", "pool"]
      },
      {
        name: "hotelTwo",
        starRating: 3,
        facilities: ["gym", "bar"]
      },
      {
        name: "hotelThree",
        starRating: 1,
        facilities: ["empty pool"]
      }
    ]

  },
  mutations: {

  },
  actions: {

  }
})
