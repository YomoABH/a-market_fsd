<script setup>
import { ContentCard } from '@shared';


</script>

<template>
	<ContentCard>
		<!-- <h3 class="title">Выбрать адрес доставки</h3> -->
		<div class="count">Товары: 0 шт</div>
		<div class="total-sum">
			<span>ИТОГО:</span> <span>0 ₽</span>
		</div>
		<slot></slot>
	</ContentCard>
</template>

<style lang="scss" scoped>
.title {
	font-size: 1.6rem;
	margin-bottom: 1.5rem;
}

.count {
	font-size: 1.3rem;
	margin-bottom: 1.5rem;
}

.total-sum {
	display: flex;
	justify-content: space-between;
	font-size: 2.5rem;
	font-weight: 600;
	margin-bottom: 3rem;
}
</style>