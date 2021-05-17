import {ActionContext, Module} from "vuex";
import { getItems, getItemReviews, createItem, updateItem, deleteItem, getItem } from "@/api";
import {Product, Review} from "@/types";
import {State} from "@/store";

interface ProduceState {
  items: Product[],
  item: Product | null,
  reviews: Review[],
  loading: boolean,
}

const produce: Module<ProduceState, State> = {
  namespaced: true,

  state: () => ({
    items: [],
    item: null,
    reviews: [],
    loading: false,
  }),

  getters: {
    items: (state: ProduceState) => state.items,
    item: (state: ProduceState) => state.item,
    reviews: (state: ProduceState) => state.reviews,
    loading: (state: ProduceState) => state.loading,
  },

  mutations: {

    SET_ITEMS(state: ProduceState, payload: Produce[]): void {
      state.items = payload;
    },

    SET_ITEM(state: ProduceState, payload: Produce): void {
      state.item = payload;
    },

    SET_REVIEWS(state: ProduceState, payload: Review[]): void {
      state.reviews = payload;
    },

    LOADING(state: ProduceState, payload: boolean): void {
      state.loading = payload;
    },

  },

  actions: {

    async getAndSetItems({ commit }: ActionContext<ProduceState, State>): Promise<void> {

      commit("LOADING", true);

      const response = await getItems();

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEMS", response.data.data.items);
      commit("LOADING", false);

    },

    async getAndSetItem({ commit }: ActionContext<ProduceState, State>, id: number): Promise<void> {

      commit("LOADING", true);

      const response = await getItem(id);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEM", response.data.data);
      commit("LOADING", false);

    },

    async deleteAndUnsetItem({ commit }: ActionContext<ProduceState, State>, id: number): Promise<void> {

      commit("LOADING", true);

      const response = await deleteItem(id);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEM", null);
      commit("LOADING", false);

    },

    async createAndSetItem({ commit }: ActionContext<ProduceState, State>, item: Product): Promise<void> {

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

    async getAndSetItemReviews({
      commit,
    }: ActionContext<ProduceState, State>, id: number): Promise<void> {

      commit("LOADING", true);

      const response = await getItemReviews(id);

      if (response.status !== 200) {
        commit("LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_REVIEWS", response.data.data.items);
      commit("LOADING", false);

    },


  },
};

export { produce, ProduceState }
