<script setup>

</script>

<template>
	<div class="icon">
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<style lang="scss" scoped>
.icon {
	width: 4.5rem;
	height: 2.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: transform .1s;

}

.icon:hover {
	cursor: pointer;
	transform: scale(.9);
}

.icon span {
	display: inline-block;
	height: 0.4rem;
	width: 100%;
	background-color: #000;
}
</style>