import { createApp } from 'vue'
import main_component from './main_component.vue'
import router from "./routers/index.js";
createApp(main_component).use(router).mount('#app')


