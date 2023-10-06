<script setup>
import { ContentContainer } from '@shared'
import { SiteLogotip, BtnPanel } from './ui';
import { ListCatigories, SearchForm } from '@entities/'
</script>

<template>
	<header class="header">
		<ContentContainer class="header-container">
			<ListCatigories></ListCatigories>
			<SiteLogotip></SiteLogotip>
			<SearchForm></SearchForm>
			<BtnPanel></BtnPanel>
		</ContentContainer>
	</header>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.header {
	height: 10rem;
	background-color: $seconde-color;
	box-shadow: 4px 4px 6px 0px rgba(34, 60, 80, 0.21);
}

.header-container {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>