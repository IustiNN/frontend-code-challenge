import App from '@/App.vue'
import Vue from 'vue'
import { mount } from 'avoriaz'
import Vuex from 'vuex'

Vue.use(Vuex)

describe('App.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      loading: () => true
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('Shows loading screen', () => {
    const wrapper = mount(App, { store })
    Vue.nextTick(() => {
      const dimmer = wrapper.find('.dimmer')[0]
      expect(dimmer.hasAttribute('display')).to.equal(getters.loading())
    })
  })
})
