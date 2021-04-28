import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'

describe('Search.vue', () => {
  it('Search Component Rendered', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper).toMatchSnapshot()
  })
})
