import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const state = {
  ads: [],
  adsToLoad: 10
}

const actions = {
  getAllAds: (context) => {
    api.get('https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements')
      .then((response) => {
        const allAds = response.data.data
        context.commit('receive_ads', allAds.slice(0, context.state.adsToLoad))
      })
  },
  loadMoreAds: (context) => {
    context.commit('increase_ads', 10)
    context.dispatch('getAllAds')
  }
}

const getters = {
  ads: (state) => state.ads,
  adsToLoad: (state) => state.adsToLoad
}

// mutations
const mutations = {
  receive_ads: (state, ads) => {
    state.ads = ads
  },
  increase_ads: (state, payload) => {
    state.adsToLoad = state.adsToLoad + payload
  }
}

let store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

global.store = store

export default store
