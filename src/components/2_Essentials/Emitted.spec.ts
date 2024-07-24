import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Counter from './Emitted.vue';

describe('emit tests', () => {
	it("should emit an event 'change' when clicked", () => {
		const wrapper = mount(Counter);

		wrapper.find('button').trigger('click');
		wrapper.find('button').trigger('click');
		console.log(wrapper.emitted());
		expect(wrapper.emitted()).toHaveProperty('change');
	});

	
	it("should emit an three event 'change' when clicked three times", () => {
		const wrapper = mount(Counter);

		wrapper.find('button').trigger('click');
		wrapper.find('button').trigger('click');
		const changeEvent = wrapper.emitted('change') as any
		expect(changeEvent).toHaveLength(2)
		expect(changeEvent[0][0]).toEqual({ count: 0 })
		expect(changeEvent[1][0]).toEqual({ count: 0 })
	});
	
it('should emit an event \'batata\' when double clicked', () => {
	const wrapper = mount(Counter);

	wrapper.find('button').trigger('dblclick');
	wrapper.find('button').trigger('dblclick');
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('batata');
});
	
	it('should ')
});
