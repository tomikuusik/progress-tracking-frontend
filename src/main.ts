import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
// import "@/assets/global";

createApp(App)
  .use(store)
  .use(router)
  // .component("k-progress", KProgress)
  .mount("#app");
