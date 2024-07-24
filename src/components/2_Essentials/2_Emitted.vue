<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['change', 'batata']);
const count = ref(0);
const onClick = () => {
    emit('change', { count: count.value })
}
const onDblClick = () => {
    emit('batata')
}
</script>

<template>
	<button @click="onClick" @dblclick="onDblClick">Incrementar {{ count }}</button>
</template>
