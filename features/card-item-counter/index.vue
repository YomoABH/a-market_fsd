<script setup>

</script>

<template>
	<div class="counter">
		<button></button>
		<span>1</span>
		<button></button>
	</div>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.counter {
	display: flex;
	align-items: start;
	gap: 1rem;

	& span {
		display: inline-block;
		padding: 0 1.5rem;
		font-size: 1.6rem;
	}

	& button {
		width: 3rem;
		height: 3rem;

		font-family: Inter;
		font-size: 35px;

		background: $akcent-color_opacity;
		border-radius: .6rem;
		margin: 0;
		border: .0rem $font-color solid;

	}
}
</style>