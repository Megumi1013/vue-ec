import { createStore } from "vuex";
import { produce, ProduceState } from "./modules/produce";
import { reviews, ReviewsState } from "./modules/reviews";

interface State {
  produce: ProduceState,
  reviews: ReviewsState
}

const store = createStore<State>({
  modules: {
    produce,
    reviews,
  },
});

export { store, State }
