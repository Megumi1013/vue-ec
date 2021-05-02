<template>
  <div class="dashboard dashboard-app">
    <div class="md:flex">
      <dashboard-sidebar></dashboard-sidebar>
      <div class="container">
        <dashboard-header></dashboard-header>
        <div class="px-10 py-7 text-left">
          <div class="flex">
            <h1 class="text-xl">商品詳細</h1>
          </div>

          <div class="flex justify-center">
            <div
              class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"
            ></div>
          </div>

          <label class="block my-12 sm:flex items-center">
            <div class="text-gray-700 w-1/6">商品名</div>

            <input
              type="text"
              class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="パイナップル"
              v-model="item.name"
            />
          </label>

          <label class="block my-12 sm:flex items-center">
            <div class="text-gray-700 w-1/6">商品説明</div>

            <textarea
              v-if="produceItemLength"
              class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="宮崎県の佐藤さんのパイナップル"
              v-model="item.description"
            ></textarea>

            <textarea
              v-else
              class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="宮崎県の佐藤さんのパイナップル"
              v-model="state.itemDescription"
            ></textarea>
          </label>

          <label class="block my-12 sm:flex items-center">
            <div class="text-gray-700 w-1/6">価格</div>

            <input
              v-if="produceItemLength"
              type="text"
              class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="400"
              v-model="item.price"
            />
            <input
              v-else
              type="text"
              class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="400"
              v-model="state.itemPrice"
            />
          </label>

          <p>この商品のレビュー</p>
          <div v-if="produceItemLength">
            <table class="w-full my-3">
              <thead>
                <tr class="border-gray-200">
                  <th class="p-2">星の数</th>
                  <th class="p-2">内容</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(review, reviewIndex) in reviewItems"
                  :key="reviewIndex"
                >
                  <td class="p-2">
                    {{ review.stars }}
                  </td>
                  <td class="p-2">{{ review.content }}</td>
                  <td class="p-2">{{ review.created_at }}</td>
                  <td class="p-2">
                    <dashboard-button class="mr-3">削除</dashboard-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else-if="reviewItems.length === 0" class="alert-light">
            レビューが登録されていません。
          </div>

          <div class="flex items-center">
            <button @click="setNewItem">登録</button>
            <!--            <dashboard-button @handleClick="setNewItem">登録</dashboard-button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import DashboardButton from "@/components/DashboardButton.vue";
import { Produce, Review } from "@/store/modules/produce";

type ComponentState = {
  item: Record<any, any>;
};

export default defineComponent({
  name: "DashboardItemDetails",
  components: {
    DashboardButton,
    DashboardSidebar,
    DashboardHeader,
  },
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  setup: function (props) {
    const store = useStore();

    const state: ComponentState = reactive<ComponentState>({
      item: {
        name: "",
        description: "",
        price: null,
        isDisabled: false,
      },
    });

    // const getAndSetReviewItems = async () => {
    //   await store.dispatch("produce/getAndSetReviews");
    // };
    console.log(props.id);
    const getAndSetItem = async () => {
      await store.dispatch("produce/getAndSetItem", props.id);
    };

    function produceItemLength(): void {
      if (state.produceItem !== null) {
        state.produceItemLength = true;
      }
    }

    onMounted(() => {
      //getAndSetReviewItems();
      getAndSetItem();
      produceItemLength();
    });

    const setNewItem = async () => {
      let params = {
        name: state.itemName,
        description: state.itemDescription,
        price: state.itemPrice,
      };
      await store.dispatch("produce/getAndSetNewItem", params);
    };

    return {
      produceItem: computed(() => store.state.produce.item),
      reviewItems: computed(() => store.state.produce.reviews),
      state,
      setNewItem,
    };
  },
});
</script>
<style scoped>
body {
  background: #d5eef2;
}
.item-img {
  width: 250px;
  height: 250px;
}
</style>
