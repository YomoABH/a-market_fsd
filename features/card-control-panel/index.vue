<script setup>
import { ContentCard } from '@shared'
</script>

<template>
	<ContentCard class="control-panel">
		<label class="checkbox">
			<input type="checkbox">
			<span>выбрать все</span>
		</label>
		<button class="btn">удалить выделенное</button>
	</ContentCard>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.control-panel {
	margin-bottom: 1rem;
	box-sizing: border-box;
	width: 100%;
	display: flex;
	gap: 3rem;
}

.checkbox {
	display: flex;
	align-items: center;
	gap: .5rem;

	& span {
		font-size: 1.6rem;
		font-family: 'Arial' serif;
	}

	& input {
		width: 2rem;
		height: 2rem;
	}

	@media (min-width:$mobile) {
		&:hover {
			cursor: pointer;
		}
	}

}

.btn {
	background-color: transparent;
	border: 0;
	font-size: 1.6rem;
	color: rgb(217, 5, 5);
	text-decoration: underline;

	@media (min-width:$mobile) {
		&:hover {
			cursor: pointer;
		}
	}
}
</style>