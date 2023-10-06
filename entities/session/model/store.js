import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSessionStore = defineStore('session', () => {

	let sessionInfo = ref({
		name: '',
		surname: '',
		phone: null,
		phone_id: null,
		phone_code: null
	})

	const changeInfo = (data) => {
		sessionInfo.value = { ...sessionInfo.value, ...data }
	}

	const loginInfo = computed(() => {
		return {
			phone: sessionInfo.value.phone,
			phone_id: sessionInfo.value.phone_id,
			phone_code: sessionInfo.value.phone_code
		}
	})

	return { sessionInfo, changeInfo, loginInfo }
})
