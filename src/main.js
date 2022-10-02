import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'
import AppDate from "@/components/AppDate";

const forumApp = createApp(App)
forumApp.component('AppDate', AppDate)
forumApp.use(router)
forumApp.mount('#app')
