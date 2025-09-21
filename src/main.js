// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
// import { Vue3Mq } from 'vue3-mq'

const app = createApp(App)

//     app.use(Vue3Mq, {
//     breakpoints: {
//         xs: 0,
//         sm: 450,
//         md: 1250,
//         lg: Infinity,
//     },
//     defaultBreakpoint: 'sm'
// })

// ROUTER
import router from './router/index.js'

// VUETIFY
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// MDI/FONT
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})


app.use(vuetify)
app.use(router)
app.mount('#app')