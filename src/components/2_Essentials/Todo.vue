<script setup lang="ts">
	import { ref } from 'vue';

	const todos = ref([
		{
			id: 1,
			text: 'Aprender sobre testes unitários',
			completed: false,
		},
	]);
	const newTodo = ref('');

	const handleCreation = () => {
		todos.value = [
			...todos.value,
			{
				id: 2,
				text: newTodo.value,
				completed: false,
			},
		];
	};

	defineExpose({ todos });
</script>

<template>
	<div>
		<div
			v-for="todo in todos"
			:key="todo.id"
			data-test="todo"
		>
			{{ todo.text }}
		</div>

		<form
			data-test="form"
			@submit.prevent="handleCreation"
		>
			<input
				data-test="new-todo"
				v-model="newTodo"
			/>
		</form>
	</div>
</template>
