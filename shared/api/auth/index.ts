import { LoginAPIInstasnce } from "@shared/api"

export const AuthAPI = {
	verifyPhone(phone: Number) {
		const url = `api/v1/public/verify_phone`
		return LoginAPIInstasnce.post(url, { phone })
	},
	exitPhone(phone: Number) {
		const url = `api/v1/public/exist_phone`
		return LoginAPIInstasnce.post(url, { phone })
	},
	createUser(data: Object) {
		const url = `api/v1/public/users`
		return LoginAPIInstasnce.post(url, { ...data })
	},
	login(user: Object) {
		const url = `api/v1/public/user`
		return LoginAPIInstasnce.post(url, { ...user })
	},
}