<script setup>
import { ContentCard, MyButton } from '@shared';
import { ref } from 'vue';
import { useSessionStore } from '@entities'
import { useRouter } from 'vue-router'

const store = useSessionStore()
const router = useRouter()

let a = ''
let b = ''
let c = ''
let d = ''

const submit = () => {
	return Number(`${a}${b}${c}${d}`)
}

</script>

<template>
	<ContentCard class="wrapper">
		<h1 class="title">Введите код</h1>
		<h2 class="subtitle">На ваш телефон придет что-то там , я вообще хз</h2>
		<form @submit.prevent="$emit('phoneCode', submit())">
			<div>
				<input v-model="a" type="text">
				<input v-model="b" type="text">
				<input v-model="c" type="text">
				<input v-model="d" type="text">
			</div>
			<MyButton>Подтвердить</MyButton>
		</form>
	</ContentCard>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem 4.4rem;

}

.title {
	text-align: center;
	font-size: 3.1rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
	margin-top: 1rem;
}

.subtitle {
	color: $font-color;
	font-size: 1.8rem;
	font-weight: 300;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 3rem 0;
	gap: 5rem;

	div {
		display: flex;
	}
}

input {
	margin: 0 1rem;
	width: 6rem;
	height: 8rem;
	border: 0.3rem $akcent-color solid;
	text-align: center;
	font-size: 3rem;
	font-weight: 600;
}
</style>