<script setup>
import { CardControlPanel, CardItemCounter, DeleteCardItem } from '@features'
import { CardItem } from '@entities'
</script>

<template>
	<div>
		<div>
			<CardControlPanel></CardControlPanel>
			<ul class="list">
				<CardItem>
					<template #card-item-counter>
						<CardItemCounter></CardItemCounter>
					</template>
					<template #delete-card-item>
						<DeleteCardItem></DeleteCardItem>
					</template>
				</CardItem>
				<CardItem>
					<template #card-item-counter>
						<CardItemCounter></CardItemCounter>
					</template>
					<template #delete-card-item>
						<DeleteCardItem></DeleteCardItem>
					</template>
				</CardItem>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>	