<script setup>
import { defineProps } from 'vue';
const props = defineProps({
	placeholder: String,
	value: ''
})
</script>

<template>
	<input :value="props.value" @input="$emit('inputCastom', $event.target.value)" class="input"
		:placeholder="props.placeholder" type="text">
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.input {
	height: 4rem;
	box-sizing: border-box;
	padding-left: 1rem;

	border: transparent;
	border-radius: 6px;
	background: $main-color;
}
</style>