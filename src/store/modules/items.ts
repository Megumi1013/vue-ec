// import { InjectionKey } from "vue";
// import {
//   createStore,
//   useStore as baseUseStore,
//   Store,
//   ActionContext,
// } from "vuex";
// import { getItems } from "./api";
//
// type Items = {
//     name: string;
//     description: string;
//     price: number;
//     isDisabled: boolean;
//     created_at: number;
//     updated_at: number;
// };
// export interface State {
//     Items: Array<Items>;
// };
//
// export const key: InjectionKey<Store<State>> = Symbol();
//
// export const store = createStore<State>({
//     state: {
//       items: [],
//     },
//
//     getters: {
//       items(state) {
//         return state.item;
//       },
//     },
//
//     mutations: {
//       SET_ITEMS(state: State, payload: string) {
//         state.items = payload;
//       },
//     },
//
//     actions: {
//       setAndGetItems({ commit }: ActionContext<State, State>): void {
//           return new Promise((resolve, reject) => {
//
//               getItems().then((response) => {
//                   console.log(response)
//                   if (response.data) {
//
//                       commit('SET_ITEMS', response.data)
//                       resolve()
//
//                   } else {
//                       reject('エラーが発生しました。')
//                   }
//
//               })
//
//           })
//       }
//     }
// })
//
// // define your own `useStore` composition function
// export function useStore () {
//     return baseUseStore(key)
// }
