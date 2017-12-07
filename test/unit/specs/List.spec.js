import Vue from 'vue'
import { mount } from 'avoriaz'
import List from '@/components/List.vue'
import Single from '@/components/Single.vue'

describe('List', () => {
  // let actions;
  // let store;
  //
  // beforeEach(() => {
  //   actions = {
  //     actionClick: sinon.stub(),
  //     actionInput: sinon.stub(),
  //   };
  //   store = new Vuex.Store({
  //     state: {},
  //     actions,
  //   });
  // });
  const wrapper = mount(List)
  it('is a vue component', () => {
    expect(wrapper.isVueComponent).to.equal(true)
  })

  it('has a mounted hook', () => {
    expect(typeof List.mounted).to.equal('function')
  })

  it('renders a Single component', () => {
    Vue.nextTick(() => {
      expect(wrapper.contains(Single)).to.equal(true)
    })
  })

  it('adds new item to list on click with avoriaz', () => {
    // build component
    const ListComponent = mount(List)
    Vue.nextTick(() => {
      // simulate click event
      const button = ListComponent.find('.load-more')[0]
      button.dispatch('click')
      expect(ListComponent.data().ads.length).to.equal(20)
    })
  })
})
