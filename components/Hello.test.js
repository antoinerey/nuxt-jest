import { mount } from '@vue/test-utils'
import Hello from './Hello.vue'

describe('Hello component', () => {
  const wrapper = mount(Hello)

  it('renders the correct markup', () => {
    const actual = wrapper.html()
    const expected = '<h1>Hello</h1>'

    expect(actual).toEqual(expected)
  })
})
