import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router.js'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add SVG Core
import { library } from '@fortawesome/fontawesome-svg-core'

// Free Icons Styles
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Add Free Icons Styles To SVG Core
library.add(fas, far, fab)

const app = createApp(App)
app.use(router).component('fa', FontAwesomeIcon).mount('#app')
