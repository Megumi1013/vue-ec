import { createStore } from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import produce from "./modules/produce";

export default createStore({
  modules: {
    produce,
  },
});
