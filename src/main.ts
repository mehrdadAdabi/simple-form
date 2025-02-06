
import { createApp } from "vue";
import App from "./App.vue";
import PersianDatePicker from 'vue3-persian-datetime-picker';

import router from "./router";
import "./assets/styles/main.scss"

const app = createApp(App);

app.use(router);
app.component('PersianDatePicker', PersianDatePicker);

app.mount("#app");