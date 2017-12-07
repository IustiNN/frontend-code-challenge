import Vue from 'vue'
import Single from '@/components/Single.vue'
import { mount } from 'avoriaz'

const mockAd = {
  'additionalId': 1,
  'title': 'Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg',
  'realestateSummary': {
    'address': {
      'street': 'Philippstraße',
      'number': '16',
      'postalCode': '09130',
      'city': 'Chemnitz',
      'fullAddress': 'Philippstraße 16, 09130 Chemnitz',
      'location': {
        'type': 'Point',
        'coordinates': [
          50.8416291,
          12.9387862
        ]
      }
    },
    'numberOfRooms': 1,
    'space': 37.02
  },
  'advertisementAssets': {
    '0': {
      'advertisementThumbnails': {
        'inventory_m': {
          'url': 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573379e18ffd7c64368b4568_variant_asset5829e70a6bc59_inventoryM.jpg'
        }
      }
    }
  }
}

describe('Single', () => {
  const wrapper = mount(Single, {
    propsData: {
      ad: mockAd
    }
  })

  it('is a vue component', () => {
    expect(wrapper.isVueComponent).to.equal(true)
  })

  it('has a filter', () => {
    expect(typeof Single.filters.formatSpace).to.equal('function')
    let mockVal = 2.222
    const result = Single.filters.formatSpace(mockVal)
    expect(result).to.equal('2.22')
  })

  it('sets the correct default props', () => {
    expect(typeof wrapper.propsData().ad).to.equal('object')
  })

  // Mount an instance and inspect the render output
  it('renders the correct title', () => {
    const wrapper = mount(Single, {
      propsData: {
        ad: mockAd
      }
    })
    Vue.nextTick(() => {
      expect(wrapper.find('.description')).to.equal(wrapper.propsData().ad.title)
    })
  })
})
