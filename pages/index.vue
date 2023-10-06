<script  setup >

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const layout = computed(() => {
	return route.meta?.layout || 'default-layout'
})
console.log(layout.value);
let foo = "dssdfsd"

</script>

<template >
	<component :is="layout">
		<router-view> </router-view>
	</component>
</template>


<style></style>