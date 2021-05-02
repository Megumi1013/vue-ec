import { ActionContext } from "vuex";
import { getItems, getReviews, createItem, updateItem, deleteItem, getItem } from "./../../api";

export type Produce = {
  id: number | null,
  name: string,
  description: string | null,
  price: number,
  isDisabled: boolean,
  created_at: string,
  updated_at: string,
};

export type Review = {
  id: number | null,
  item_id: number,
  name: string,
  content: string,
  star: number,
  created_at: string,
  updated_at: string,
};

export type Params = {
  name: string | null;
  description: string | null;
  price: number | null;
}

export interface State {
  items: Array<Produce>;
  // @ts-ignore
  item: Record<Produce, any>;
  reviews: Array<Review>;
  loading: boolean;
}

export default {
  namespaced: true,

  state: () => ({
    items: [],
    item: null,
    reviews: [],
    loading: false,
  }),

  getters: {
    items: (state: State) => state.items,
    item: (state: State) => state.item,
    reviews: (state: State) => state.reviews,
    loading: (state: State) => state.loading,
  },

  mutations: {
    SET_ITEMS(state: State, payload: Array<Produce>): void {
      state.items = payload;
    },
    SET_ITEM(state: State, payload: Array<Produce>): void {
      state.item = payload;
    },
    SET_REVIEWS(state: State, payload: Array<Review>): void {
      state.reviews = payload;
    },
    LOADING(state: State, payload: boolean): void {
      state.loading = payload;
    },
  },

  actions: {

    async getAndSetItems({ commit }: ActionContext<State, State>): Promise<void> {

      commit("LOADING", true);

      const response = await getItems();

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      // @ts-ignore
      commit("SET_ITEMS", response.data.data.items);
      commit("LOADING", false);

    },

    async getAndSetItem({ commit }: ActionContext<State, State>, id: Number): Promise<void> {

      commit("LOADING", true);

      const response = await getItem(id);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      // @ts-ignore
      commit("SET_ITEM", response.data.data);
      commit("LOADING", false);

    },

    async deleteAndUnsetItem({ commit }: ActionContext<State, State>, id: Number): Promise<void> {

      commit("LOADING", true);

      const response = await deleteItem(id);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEM", null);
      commit("LOADING", false);

    },

    async createAndSetItem({ commit }: ActionContext<State, State>, item: Produce): Promise<void> {

      commit("LOADING", true);

      const response = await createItem(item);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      let data = response.data
      commit("SET_ITEM", data);
      commit("LOADING", false);

    },

    async getAndSetReviews({
      commit,
    }: ActionContext<State, State>): Promise<void> {
      const response = await getReviews();

      if (response.status !== 200) {
        throw new Error("エラーが発生しました。");
      }
      let data = response.data
      commit("SET_REVIEWS", data.items);
      commit("LOADING", true);
      // console.log(response.data.data.items);
    },


  },
};
