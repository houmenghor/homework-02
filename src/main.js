import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n} from 'vue-i18n'
import App from './App.vue'
import router from './router'
import '@/assets/css/main.css'
import { en } from '@/lang/en'
import { kh } from '@/lang/kh'

const app = createApp(App)
const i18n = createI18n({
    locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        kh: kh
    }
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
