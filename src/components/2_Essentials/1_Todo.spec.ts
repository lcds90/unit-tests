import { mount } from '@vue/test-utils';
import TodoApp from './1_Todo.vue';
import { describe, expect, it } from 'vitest';

describe('todo tests', () => {
	let wrapper = mount(TodoApp);

	it('should render text', () => {
		const todo = wrapper.get('[data-test="todo"]');
		expect(todo.text()).toBe('Aprender sobre testes unitários');
	});

	it('should add todo', async () => {
		const wrapper = mount(TodoApp);
		expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
		
		// LINK https://test-utils.vuejs.org/guide/advanced/async-suspense.html#Asynchronous-Behavior
		console.log(wrapper.vm.newTodo)
		await wrapper.get('[data-test="new-todo"]').setValue('New todo');
		console.log(wrapper.vm.newTodo)
		await wrapper.get('[data-test="form"]').trigger('submit');
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    console.log('Utilize defineExpose na composition API para expor dados que precisam ser testados do script')
    console.log(wrapper.vm.todos);
    expect(wrapper.vm.todos.length).toBe(2)
	});

	it('should render console', () => {
		console.log(
			'🔧 Use mount() para renderizar um componente e ter sua instância.'
		);
		console.log('🔍 Use get() e findAll() para consultar o DOM.');
		console.log(
			'🖱️ trigger() e setValue() são auxiliares para simular a entrada do usuário.'
		);
		console.log(
			'🔄 Atualizar o DOM é uma operação assíncrona, então certifique-se de usar async e await.'
		);
		console.log(
			'✅ Testar geralmente consiste em 3 fases: organizar, agir e afirmar.'
		);
	});
});
