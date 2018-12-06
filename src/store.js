import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let dragonapi = axios.create({
  baseURL: "//dragon-duel.herokuapp.com/api"
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    game: {}

  },
  mutations: {
    setDragons(state, dragons) {
      state.dragons = dragons
    },
    setChampions(state, champions) {
      state.champions = champions
    },
    setGame(state, game) {
      state.game = game
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
    },
    startGame({ commit }, newGame) {
      dragonapi.post("/games", newGame)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game' })
        })
    }
  }
})
