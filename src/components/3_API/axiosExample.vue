<template>
	<button class="button" @click="getPosts">Get posts</button>
	<ul>
		<li
			v-for="post in posts"
			:key="post.id"
			data-test="post"
		>
			{{ post.title }}
		</li>
	</ul>
</template>

<script setup lang="ts">
	import axios from 'axios';
	import { ref } from 'vue';

	interface Posts {
		userId: number;
		id: number;
		title: string;
		completed: boolean;
	}

	const posts = ref<Posts[]>([]);
	const getPosts = async () => {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		console.log(data)
		posts.value = data;
	};
</script>

<style>
.button {
	margin-top: 25px;
}
</style>