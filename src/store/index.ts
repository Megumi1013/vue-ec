import { createStore } from "vuex";
import produce from "./modules/produce";

export default createStore({
  modules: {
    produce,
  },
});
