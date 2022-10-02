import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'
import dayjs from "dayjs";

const forumApp = createApp(App)
forumApp.provide(/* key */ 'dateFormatter', /* value */ dayjs)
forumApp.use(router)
forumApp.mount('#app')
