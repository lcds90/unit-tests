import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue';
import { describe, expect, it } from 'vitest'

describe('Hello World tests', () => {
  it('Should increment on button click', async () => {
    const wrapper = mount(HelloWorld)
    const selectors = {
      paragraph: '[data-track="paragraph"]',
      button: '[data-track="count"]'
    }
    console.log(wrapper.html())
    const button = wrapper.find(selectors.button)
    await button.trigger('click')

    console.log('\n')
    console.log(wrapper.html())
    expect(wrapper.find(selectors.paragraph).isVisible()).toBeTruthy()
    expect(button.text()).toBe('count is 1')
  })

  it('Should render correct title', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'batata' } })
    console.log(wrapper.html())
    expect(wrapper.find('h1').text()).toBe('batata')

  })
})