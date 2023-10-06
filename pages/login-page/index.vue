<script lang="ts" setup>
import { MyButton } from '@shared/'
import { LoginForm, RegistrationForm, PhoneConfirmation } from '@features'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue';

const route = useRoute()
const router = useRouter()
const typePage = computed(() => route.meta.type)

const back = () => {
	router.back()
}
</script>

<template>
	<div>
		<MyButton @click="back" class="login-btn">
			Назад
		</MyButton>
		<div class="content">
			<LoginForm v-if="typePage === 'login'"></LoginForm>
			<RegistrationForm v-if="typePage === 'registration'"></RegistrationForm>
			<PhoneConfirmation v-if="typePage === 'confirmation'"></PhoneConfirmation>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.login-btn {
	position: fixed;
	left: 1.5rem;
	top: 1.5rem;
	font-size: 1.5rem;
}

.content {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>