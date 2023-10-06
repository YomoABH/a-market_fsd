<script setup>
import { MyButton, MyInput, AuthAPI } from '@shared'
import { PhoneConfirmation } from '@features'
import { ref } from 'vue'
import { useSessionStore } from '@entities'
import { useRouter } from 'vue-router'

const store = useSessionStore()
const router = useRouter()

let registrationData = ref({
	name: "Nikita",
	surname: "Sidiropulo",
	phone: "+7 (940) 702-02-04"
})

const submitForm = async (data) => {
	let validData = { ...data }
	validData.phone = Number(validData.phone.replace(/\D+/g, ""))

	AuthAPI.exitPhone(validData.phone)
		.then(res => {
			if (res.data.exist === false) {
				AuthAPI.verifyPhone(validData.phone)
					.then(res => {
						store.changeInfo(validData)
						store.changeInfo({ phone_id: res.data.phone_id })
						router.push('/phone-confirmation')
					})
			}
		})
}

</script>

<template>
	<div>
		<div class="body">
			<h2 class="title">Регистрация</h2>
			<form @submit.prevent="submitForm(registrationData)" action="" class="form">
				<MyInput :value="registrationData.name" @input-castom="registrationData.name = $event"
					placeholder="Введите e-mail"></MyInput>
				<MyInput :value="registrationData.surname" @input-castom="registrationData.surname = $event"
					placeholder="Введите логин"></MyInput>
				<MyInput :value="registrationData.phone" @input-castom="registrationData.phone = $event"
					placeholder="Введите пaроль"></MyInput>
				<div>
					<MyButton class="form-btn">Зарегистрироваться</MyButton>
				</div>
			</form>
			<RouterLink to="phone-confirmation">
				<button class="registration">Вход</button>
			</RouterLink>

		</div>
		<PhoneConfirmation></PhoneConfirmation>

	</div>
</template>

<style lang="scss" scoped>
@import '@app/styles/var.scss';

.body {
	width: 42rem;
	padding: 3rem 4.4rem;
	box-sizing: border-box;
	margin: 0 auto;
	border-radius: .6rem;
	background-color: $seconde-color;
	box-shadow: 1.2rem 1.2rem 1.2rem 0rem rgba(0, 0, 0, 0.04), -1.2rem -1.2rem 1.2rem 0rem rgba(0, 0, 0, 0.04);
}

.title {
	text-align: center;
	font-size: 3.5rem;
	font-weight: 600;
	margin-bottom: 5rem;
}

.form {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}


.form-btn {
	margin: 0 auto;
	margin-top: 3rem;
	margin-bottom: 2rem;
}

.registration {
	font-size: 1.3rem;
	opacity: .7;
	background-color: transparent;
	border: transparent;
	transition: opacity .3s;

	@media (min-width:$mobile) {
		&:hover {
			cursor: pointer;
			opacity: .9;
		}
	}
}
</style>