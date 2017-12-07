import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const state = {
  ads: [],
  adsToLoad: 10,
  loading: false
}

export const actions = {
  getAllAds: (context) => {
    context.commit('change_loading', true)
    api.get('https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements')
      .then((response) => {
        const allAds = response.data.data
        context.commit('receive_ads', allAds.slice(0, context.state.adsToLoad))
        context.commit('change_loading', false)
      })
  },
  loadMoreAds: (context) => {
    context.commit('increase_ads', 10)
    context.dispatch('getAllAds')
  }
}

export const getters = {
  ads: (state) => state.ads,
  adsToLoad: (state) => state.adsToLoad,
  loading: (state) => state.loading
}

// mutations
export const mutations = {
  receive_ads: (state, ads) => {
    state.ads = ads
  },
  increase_ads: (state, payload) => {
    state.adsToLoad = state.adsToLoad + payload
  },
  change_loading: (state, payload) => {
    state.loading = payload
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
