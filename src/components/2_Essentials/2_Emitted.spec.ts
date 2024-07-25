import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from './2_Emitted.vue'

describe('emit tests', () => {
  it("should emit an event 'change' when clicked", () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it("should emit an three event 'change' when clicked three times", async () => {
    const wrapper = mount(Counter)

    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')

    const changeEvent = wrapper.emitted('change') as any
    expect(changeEvent).toHaveLength(2)
    expect(changeEvent[0][0]).toEqual({ count: 1 })
    expect(changeEvent[1][0]).toEqual({ count: 2 })
  })

  it("should emit an event 'batata' when double clicked", () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('dblclick')
    wrapper.find('button').trigger('dblclick')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('batata')
  })

  it('should ')
})
