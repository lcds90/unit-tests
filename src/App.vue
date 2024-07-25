<script setup lang="ts">
	import Todo from './components/2_Essentials/1_Todo.vue';
	import ApiExample from './components/3_API/axiosExample.vue';
	import HelloWorld from './components/4_HelloWorld/HelloWorld.vue';
</script>

<template>
	<Todo />
	<hr style="margin-block: 25px"/>
	<ApiExample />
	<hr style="margin-block: 25px"/>
	<div class="card">
		<HelloWorld msg="Testes unitários" />
	</div>
</template>

<style>
body {
	background: grey;
}

.card {
	background-color: rgb(206, 206, 206);
}
</style>