import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  ActionContext,
} from "vuex";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getItems } from "./../../api";

type Items = {
  name: string | null;
  description: string | null;
  price: number | null;
  isDisabled: boolean | null;
  created_at: number | null;
  updated_at: number | null;
};
export interface State {
  items: Array<Items>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    items: [],
  },

  getters: {
    // items(state: State) {
    //   return state.items;
    // },
    items: (state: State) => state.items,
  },

  mutations: {
    SET_ITEMS(state: State, payload: Array<Items>): void {
      state.items = payload;
      return;
    },
  },

  actions: {
    async setAndGetItems({
      commit,
    }: ActionContext<State, State>): Promise<void> {
      const response = await getItems();
      console.log(response);
      const { status } = response;
      if (status !== 200) {
        throw new Error("エラーが発生しました。");
      }
      commit("SET_ITEMS", response.data);
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
