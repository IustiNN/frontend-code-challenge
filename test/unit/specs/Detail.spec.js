import Vue from 'vue'
import Detail from '@/components/Detail.vue'
import Single from '@/components/Single.vue'
import { mount } from 'avoriaz'

describe('Detail', () => {
  const wrapper = mount(Detail)
  it('is a vue component', () => {
    expect(wrapper.isVueComponent).to.equal(true)
  })

  it('has a created hook', () => {
    expect(typeof Detail.created).to.equal('function')
  })

  it('renders a Single component', () => {
    Vue.nextTick(() => {
      expect(wrapper.contains(Single)).to.equal(true)
    })
  })

  it('takes props from $route', () => {
    const $route = { props: {} }
    // build component
    const DetailComponent = mount(Detail, {
      globals: {
        $route
      }
    })
    Vue.nextTick(() => {
      expect(DetailComponent.vm.$route.props).to.equal($route.props)
    })
  })
})
