import { createStore } from "vuex";

export default createStore({
  state: {
    courses: [
      {
        id: "12AB",
        name: "HCI",
        description: "Something here",
        maxpoints: 100,
        gradable: true,
        gainedpoints: 10,
        lostpoints: 5,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
