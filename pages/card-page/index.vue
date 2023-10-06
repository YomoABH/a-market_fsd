<script lang="ts" setup>
import { CardDisclaimer, CardList, MakingOrder } from '@widgets'
import { ContentContainer } from '../../shared';
</script>

<template>
	<div class="wrapper">
		<ContentContainer>
			<CardDisclaimer v-show="false"></CardDisclaimer>

			<div class="grid-container">
				<CardList v-show="true"></CardList>
				<MakingOrder></MakingOrder>
			</div>

		</ContentContainer>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	padding: 5rem 0;
}

.grid-container {
	display: grid;
	grid-template-columns: 7.5fr 3fr;
	gap: 6rem;
}
</style>