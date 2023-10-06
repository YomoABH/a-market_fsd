<script setup>
import { ContentCard } from '@shared'
</script>

<template>
	<ContentCard class="item">
		<input type="checkbox" name="item" id="">
		<div class="img"><img src="@shared/assets/img/carditemimg.jpg" alt=""></div>
		<div class="name">Футболка женская белая базовая однотонная</div>
		<slot name="card-item-counter"></slot>
		<div class="price">300 ₽</div>
		<slot name="delete-card-item"></slot>
	</ContentCard>
</template>
<style lang="scss" scoped>
@import '@app/styles/var.scss';

.item {
	max-width: 100%;
	margin-bottom: 1rem;

	display: flex;
	justify-content: space-between;
	position: relative;

	& input {
		position: absolute;

		width: 2rem;
		height: 2rem;

		left: 10px;
		top: 10px;
	}
}

.img {
	width: 15%;
	min-width: 8rem;
	display: block;

	& img {
		max-width: 100%;
	}
}

.name {
	font-size: 1.6rem;
	width: 25rem;
}

.price {
	font-size: 2rem;
	font-weight: 600;
}
</style>