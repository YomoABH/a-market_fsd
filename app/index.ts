import { createApp } from "vue"
import { createPinia } from 'pinia'
const pinia = createPinia()
import { DefaultLayout } from '@shared/index'
import { router } from './providers/router'
import App from './index.vue'

export const app = createApp(App).use(router).use(pinia)
app.component('default-layout', DefaultLayout)
