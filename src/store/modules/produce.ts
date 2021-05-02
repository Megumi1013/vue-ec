import { ActionContext } from "vuex";
import { getItems, getReviews, createItem, updateItem, deleteItem, getItem } from "@/api";

export type Produce = {
  id: number | undefined,
  name: string,
  description: string | null,
  price: number,
  is_disabled: boolean,
  created_at: string,
  updated_at: string,
}

export type Review = {
  id: number | undefined,
  item_id: number,
  name: string,
  content: string,
  star: number,
  created_at: string,
  updated_at: string,
}

export interface State {
  items: Produce[],
  item: Produce,
  reviews: Review[],
  loading: boolean,
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

    SET_ITEMS(state: State, payload: Produce[]): void {
      state.items = payload;
    },

    SET_ITEM(state: State, payload: Produce): void {
      state.item = payload;
    },

    SET_REVIEWS(state: State, payload: Review[]): void {
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

    async getAndSetItem({ commit }: ActionContext<State, State>, id: number): Promise<void> {

      commit("LOADING", true);

      const response = await getItem(id);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEM", response.data.data);
      commit("LOADING", false);

    },

    async deleteAndUnsetItem({ commit }: ActionContext<State, State>, id: number): Promise<void> {

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

      commit("LOADING", true);

      const response = await getReviews();

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_REVIEWS", response.data.data.items);
      commit("LOADING", false);

    },


  },
};
