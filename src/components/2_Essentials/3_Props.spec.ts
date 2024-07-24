import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Password from './3_Props.vue';

describe('props test', () => {
  it('renders an error if length is too short', async () => {
    // LINK https://test-utils.vuejs.org/guide/essentials/conditional-rendering.html#Finding-Elements
    // LINK https://test-utils.vuejs.org/guide/essentials/passing-data.html
    const wrapper = mount(Password, {
      props: {
        minLength: 10,
        greeting: false,
      },
    })
    await wrapper.get('input').setValue('short');
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('Password must be at least 10 characters')
    expect(wrapper.find('[data-test="error"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-test="error"]').classes()).toContain('has-text-danger')
  })

  it('render greeting', async () => {
    const wrapper = mount(Password, {
      props: {
        minLength: 10,
        greeting: false,
      },
    })

    await wrapper.get('input').setValue('validpassword');
    expect(wrapper.html()).not.toContain('Password must be at least 10 characters')
    expect(wrapper.find('[data-test="greeting"]').exists()).toBeFalsy()

    // @ts-ignore
    await wrapper.setProps({ greeting: true, minLength: 10 })
    expect(wrapper.find('[data-test="greeting"]').exists()).toBeTruthy()
  })
})

