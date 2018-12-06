import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let dragonapi = axios.create({
  baseURL: "//dragon-duel.herokuapp.com/api"
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: []

  },
  mutations: {
    setDragons(state, dragons) {
      state.dragons = dragons
    },
    setChampions(state, champions) {
      state.champions = champions
    }
  },
  actions: {
    getDragons({ commit }) {
      dragonapi.get('dragons')
        .then(res => {
          console.log('dragons', res.data)
          commit('setDragons', res.data)
        })

    },
    getChampions({ commit }) {
      dragonapi.get('champions')
        .then(res => {
          console.log('champions', res.data)
          commit('setChampions', res.data)
        })

    }
  }
})
