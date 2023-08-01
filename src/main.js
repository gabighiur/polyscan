import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createHead } from '@vueuse/head'

const app = createApp(App).use(AOS);
const head = createHead()

app.use(head)
app.mount('#app');