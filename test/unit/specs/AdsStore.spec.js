import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, getters, actions } from '@/store/AdsStore'

Vue.use(Vuex)

const { change_loading, receive_ads, increase_ads } = mutations
const mockAds = [ {id: 1}, {id: 2} ]

describe('mutations', () => {
  it('receive_ads', () => {
    // mock state and new ads
    const state = { ads: [] }

    // apply mutation
    receive_ads(state, mockAds)
    // assert result
    expect(state.ads).to.equal(mockAds)
  })
  it('increase_ads', () => {
    // mock state
    const state = { adsToLoad: 10 }
    // apply mutation
    increase_ads(state, 10)
    // assert result
    expect(state.adsToLoad).to.equal(20)
  })
  it('change_loading', () => {
    // mock state
    const state = { loading: false }
    // apply mutation
    change_loading(state, true)
    // assert result
    expect(state.loading).to.equal(true)
  })
})

describe('actions', () => {
  it('getAllAds', () => {
   // TO DO
  })
})

describe('getters', () => {
  it('loading', () => {
    // mock state
    const state = {
      loading: true
    }

    // get the result from the getter
    const result = getters.loading(state, true)

    // assert the result
    expect(result).to.deep.equal(true)
  })
  it('ads', () => {
    // mock state
    const state = {
      ads: mockAds
    }

    // get the result from the getter
    const result = getters.ads(state, mockAds)

    // assert the result
    expect(result).to.deep.equal(mockAds)
  })
  it('adsToLoad', () => {
    // mock state
    const state = {
      adsToLoad: 20
    }

    // get the result from the getter
    const result = getters.adsToLoad(state, 20)

    // assert the result
    expect(result).to.deep.equal(20)
  })
})
