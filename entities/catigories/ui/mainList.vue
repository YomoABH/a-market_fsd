<script setup>

</script>

<template>
	<ul class="list">
		<li @click="$emit('isSublistOpened')" class="list-item active"><span>Электроника</span></li>
		<li @click="$emit('isSublistOpened')" class="list-item"><span>Алкоголь</span></li>
		<li @click="$emit('isSublistOpened')" class="list-item"><span>Седативные вещества</span></li>
	</ul>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.list {
	width: 30rem;
	padding: 1.5rem 0;

	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	border-right: $font-color solid;

}

.list-item {
	font-size: 1.6rem;
	position: relative;
}

.list-item.active span {
	border-radius: 3px;
	background: #E7E7E7;
}

.list-item span {
	padding: .2rem 1rem;
}

.list-item:hover {
	cursor: pointer;
}

.list-item:after {
	content: "";
	width: 1rem;
	height: 1.5rem;
	background: url('@shared/assets/img/arrow.svg') center/cover no-repeat;

	position: absolute;
	right: 3rem;
	top: 0;
}
</style>