import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import '../node_modules/primeicons/primeicons.css'

const app = createApp(App);

app.use(router);

app.mount("#app");
