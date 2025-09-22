
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)


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