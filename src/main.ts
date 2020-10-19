import { createApp } from "vue";
import VueMeta from "vue-meta";

const test = new VueMeta()

import App from "./App.vue";
import "./registerServiceWorker";

createApp(App).use(test, {}).mount("#app");
