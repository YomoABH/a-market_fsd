<script setup>

</script>

<template>
	<RouterLink class="logo" to="/">
		<img src="@shared/assets/img/logo.png" alt="">
	</RouterLink>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.logo {
	width: 14rem;
	transition: opacity .3s;
	display: inline-block;
}

@media (min-width: 767.8px) {
	.logo:hover {
		opacity: .7;
	}
}


.logo img {
	max-width: 100%;
}
</style>	