import axios from "axios"

import { AuthAPI } from "./auth"

const authConfig = {
	baseURL: import.meta.env.VITE_BASE_API_URL,
	headers: {
		'Content-Type': 'application/json',
	}
}


export const LoginAPIInstasnce = axios.create(authConfig)
export { AuthAPI }

