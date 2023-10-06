<script setup>
import { MyButton } from '@shared'
</script>

<template>
	<div class="wrapper">
		<h1 class="title">Корзина пуста</h1>
		<div class="text">Перейдите на главную страницу,чтобы найти все необходимое </div>
		<router-link class="link" to="/">
			<MyButton>Перейти</MyButton>
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.wrapper {
	width: 55%;
	background-color: $seconde-color;
	margin: 0 auto;
	margin-top: 5rem;
	padding: 6rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.8rem;
}

.title {
	font-size: 3rem;
	font-weight: 600;
}

.text {
	font-size: 2.1rem;
	margin-bottom: 3.2rem;
}

.link {
	text-decoration: none;
}
</style>