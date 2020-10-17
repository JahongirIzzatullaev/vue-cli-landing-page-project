import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(SequentialEntrance);
Vue.config.productionTip = false

new Vue({
    router,
    created() {
        AOS.init({
            duration: 1200
        })
    },
    render: h => h(App)
}).$mount('#app')
