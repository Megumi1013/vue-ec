import { ActionContext } from "vuex";
import { getItems, getReviews } from "./../../api";

export type Produce = {
  name: string | null;
  description: string | null;
  price: number | null;
  isDisabled: boolean | null;
  created_at: number | null;
  updated_at: number | null;
};

export type Review = {
  id: number | null;
  content: string | null;
  star: number | null;
  created_at: number | null;
  updated_at: number | null;
};

export interface State {
  items: Array<Produce>;
  reviews: Array<Review>;
  loading: boolean;
  itemIndexOfReview: number;
}

export default {
  namespaced: true,

  state: () => ({
    items: [],
    reviews: [],
    loading: false,
    itemIndexOfReview: 0,
  }),

  getters: {
    items: (state: State) => state.items,
    reviews: (state: State) => state.reviews,
    loading: (state: State) => state.loading,
    itemIndexOfReview: (state: State) => state.itemIndexOfReview,
  },

  mutations: {
    SET_ITEMS(state: State, payload: Array<Produce>): void {
      state.items = payload;
    },
    SET_REVIEWS(state: State, payload: Array<Review>): void {
      state.reviews = payload;
    },
    LOADING(state: State, payload: boolean): void {
      state.loading = payload;
    },
    // ITEM_INDEX_OF_REVIEW(state: State, payload: number): void {
    //   state.itemIndexOfReview = payload;
    // },
  },

  actions: {
    async getAndSetItems({
      commit,
    }: ActionContext<State, State>): Promise<void> {
      const response = await getItems();

      if (response.status !== 200) {
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEMS", response.data.items);
      commit("LOADING", true);

    },

    async getAndSetReviews({
      commit,
    }: ActionContext<State, State>): Promise<void> {
      const response = await getReviews();

      if (response.status !== 200) {
        throw new Error("エラーが発生しました。");
      }

      commit("SET_REVIEWS", response.data.items);
      commit("LOADING", true);
      // console.log(response.data.data.items);
    },
  },
};
