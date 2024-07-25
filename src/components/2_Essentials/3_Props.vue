<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  minLength: number
  greeting: boolean
}
const props = defineProps<Props>()
const password = ref('')
const error = computed(() => {
  if (password.value.length < props.minLength) {
    return `Password must be at least ${props.minLength} characters.`
  }

  return ''
})
</script>

<template>
  <div>
    <input v-model="password" />
    <div
      v-if="error"
      data-test="error"
      class="has-text-danger"
    >
      {{ error }}
    </div>
    <div
      v-if="greeting"
      data-test="greeting"
    >
      Hello tests world!
    </div>
  </div>
</template>

<style>
.has-text-danger {
  color: red;
}
</style>
