<script lang="ts" setup>

</script>

<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../app//styles/var.scss';

.card {
	padding: 1.5rem;
	border-radius: .6rem;
	background-color: $seconde-color;
}
</style>