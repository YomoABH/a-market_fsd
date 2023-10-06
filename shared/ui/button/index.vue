<script setup>

</script>

<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.btn {
	display: flex;
	padding: 1rem 3.3rem;
	justify-content: center;
	align-items: center;

	background-color: $akcent-color;
	border-radius: .6rem;
	border: .2rem transparent solid;

	transition: all .3s;

	font-size: 1.8rem;
	font-weight: 600;
}

@media (min-width: 767.8px) {
	.btn:hover {
		cursor: pointer;
		background-color: transparent;
		border: .2rem $akcent-color solid;
	}
}
</style>