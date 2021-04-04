import { createStore } from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import items from "./modules/items";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    items,
  },
});
