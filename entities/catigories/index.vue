<script setup>
// * system imports
import { ref, onMounted } from 'vue'

import { IconBtn, MainList, SecondaryList } from './ui/'

// * status of the list of categories
let isVisiliti = ref(false)
const isSublistOpened = ref(false)
const list = ref(null)

const foo = () => {
	if (!event.composedPath().includes(list.value)) {
		isVisiliti.value = false
		document.body.removeEventListener('click', foo)
		console.log('cli');
	}

}

const openCategoriesList = () => {

	isVisiliti.value = !isVisiliti.value

	if (isVisiliti.value === true) {
		setTimeout(() => document.body.addEventListener('click', foo), 100)

	} else {
		document.body.removeEventListener('click', foo)
	}

}
onMounted(() => {

})
</script>

<template>
	<div class="wrapper">
		<!-- * иконка открытия категорий -->
		<IconBtn @click="openCategoriesList"></IconBtn>
		<transition>
			<div ref="list" v-show="isVisiliti" class="list-wrapper">
				<!-- * лист подкатегорий -->
				<MainList @is-sublist-opened="() => isSublistOpened = !isSublistOpened"></MainList>
				<transition>
					<!-- * лист подкатегорий -->
					<SecondaryList v-show="isSublistOpened"></SecondaryList>
				</transition>
			</div>
		</transition>
	</div>
</template>


<style lang="scss" scoped >
@import './index.scss'
</style>