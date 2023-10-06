<script setup>

</script>

<template>
	<ul class="list">
		<li class="list-item">
			<img src="@shared/assets/img/card.png" alt="">
			<div>Избранное</div>
		</li>
		<li>
			<router-link class="list-item" to="card">
				<img src="@shared/assets/img/heart.png" alt="">
				<div>Корзина</div>
			</router-link>
		</li>
		<li>
			<router-link class="list-item" to="login">
				<img src="@shared/assets/img/profile.png" alt="">
				<div>Аккаунт</div>
			</router-link>
		</li>
	</ul>
</template>


<style lang="scss" scoped>
@import '@app/styles/var.scss';

.list {
	display: flex;
	gap: 3rem;
}

.list-item {
	font-size: 1.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: .3rem;

	text-decoration: none;
	color: $font-color;
}

.list-item:hover {
	cursor: pointer;
}

.list-item img {
	display: block;
	transform: scale(.8);
}
</style>