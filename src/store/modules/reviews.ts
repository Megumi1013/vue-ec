import {ActionContext, Module} from "vuex";
import { getReviews } from "@/api";
import {Review} from "@/types";
import {State} from "@/store";

interface ReviewsState {
  items: Review[],
  loading: boolean,
}

const reviews: Module<ReviewsState, State> = {
  namespaced: true,

  state: () => ({
    items: [],
    loading: false,
  }),

  getters: {
    items: (state: ReviewsState) => state.items,
    loading: (state: ReviewsState) => state.loading,
  },

  mutations: {

    SET_ITEMS(state: ReviewsState, payload: Review[]): void {
      state.items = payload;
    },

    SET_LOADING(state: ReviewsState, payload: boolean): void {
      state.loading = payload;
    },

  },

  actions: {

    async getAndSetItems({ commit }: ActionContext<ReviewsState, State>): Promise<void> {

      commit("SET_LOADING", true);

      const response = await getReviews();

      if (response.status !== 200) {
        commit("SET_LOADING", false);
        throw new Error("エラーが発生しました。");
      }

      commit("SET_ITEMS", response.data.data.items);
      commit("SET_LOADING", false);

    },

  },
};

export { reviews, ReviewsState }
