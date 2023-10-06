<script   setup>
import { MyButton, MyInput, AuthAPI } from '@shared'
import { ref } from 'vue'
import { PhoneConfirmation } from '@features'
import { useRouter } from 'vue-router'

const router = useRouter()

let phone = ref(null)
let phoneId = null
let verifyPhone = ref(false)

const submit = () => {

	let currentPhone = Number(phone.value.replace(/\D+/g, ""))
	if (currentPhone) {
		AuthAPI.verifyPhone(currentPhone)
			.then(res => {
				phoneId = res.data.phone_id
				verifyPhone.value = true
			})
	}
}

const login = (phoneCode) => {

	let user = {
		phone: Number(phone.value.replace(/\D+/g, "")),
		phone_id: phoneId,
		phone_code: phoneCode
	}
	AuthAPI.login(user)
		.then((res) => {
			localStorage.setItem('access', res.data.access)
			localStorage.setItem('refresh', res.data.refresh)
			alert('Успешный вход в аккаунт)')
		})

}

</script>

<template>
	<div>
		<div v-show="!verifyPhone" class="body">
			<h2 class="title">Вход</h2>
			<form action="" class="form" @submit.prevent="submit">
				<MyInput :value="phone" @input-castom="phone = $event" placeholder="Введите номер телефона"></MyInput>
				<div>
					<MyButton class="form-btn">Войти</MyButton>
				</div>
			</form>
			<RouterLink to="registration">
				<button class="registration">Зарегистрироваться</button>
			</RouterLink>
		</div>
		<PhoneConfirmation @phone-code="(n) => login(n)" v-show="verifyPhone"></PhoneConfirmation>
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