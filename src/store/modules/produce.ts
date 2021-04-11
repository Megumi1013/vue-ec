import { ActionContext } from "vuex";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getItems } from "./../../api";

type Produce = {
  name: string | null;
  description: string | null;
  price: number | null;
  isDisabled: boolean | null;
  created_at: number | null;
  updated_at: number | null;
};

export interface State {
  items: Array<Produce>;
}

export default {
  namespaced: true,

  state: () => ({
    items: [],
  }),

  getters: {
    items: (state: State) => state.items,
  },

  mutations: {
    SET_ITEMS(state: State, payload: Array<Produce>): void {
      state.items = payload;
    },
  },

  actions: {
    async getAndSetItems({
      commit,
    }: ActionContext<State, State>): Promise<void> {
      const response = await getItems();

      if (response.status !== 200) {
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEMS", response.data.data.items);
      console.log(response.data.data.items);
    },
  },
};
