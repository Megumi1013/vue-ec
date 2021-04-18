<template>
  <div class="dashboard dashboard-app">
    <div class="md:flex">
      <dashboard-sidebar></dashboard-sidebar>

      <div class="container">
        <dashboard-header></dashboard-header>
        <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
          <div class="flex">
            <h1 class="text-xl">商品管理</h1>
            <dashboard-button class="ml-auto btn-primary"
              >新規登録</dashboard-button
            >
          </div>
          <div>
            <div v-if="produceItems.length > 0">
              <table class="w-full my-3">
                <thead>
                  <tr class="border-gray-200">
                    <th class="p-2">商品名</th>
                    <th class="p-2">商品説明</th>
                    <th class="p-2">価格</th>
                    <th class="p-2"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, itemIndex) in produceItems"
                    :key="itemIndex"
                  >
                    <td class="p-2">
                      {{ item.name }}
                    </td>
                    <td class="p-2">{{ item.description }}</td>
                    <td class="p-2">{{ item.price }}円</td>
                    <td class="p-2">
                      <dashboard-button class="mr-3">削除</dashboard-button>

                      <div
                        class="btn btn-primary"
                        @click="passItemIndex(itemIndex)"
                      >
                        <router-link to="/dashboard/item_details">
                          詳細
                        </router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else-if="produceItems.length === 0" class="alert-light">
              商品が登録されていません。
            </div>
          </div>
        </section>
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
import { Produce } from "@/store/modules/produce";

type ComponentState = {
  produceItems: Produce[];
};

export default defineComponent({
  name: "Dashboard",
  components: {
    DashboardButton,
    DashboardSidebar,
    DashboardHeader,
  },
  props: {},
  setup: function () {
    const store = useStore();

    const state: ComponentState = reactive<ComponentState>({
      produceItems: store.state.produce.items,
    });

    // Get Produce Items

    const getAndSetProduceItems = async () => {
      await store.dispatch("produce/getAndSetItems");
    };

    // function passItemIndex(itemIndex: number): void {
    //   store.commit("ITEM_INDEX_OF_REVIEW", itemIndex);
    // }

    // onMounted(getAndSetProduceItems);
    onMounted(() => {
      getAndSetProduceItems();
    });

    return {
      produceItems: computed(() => store.state.produce.items),
      state,
    };
  },
});
</script>
<style scoped lang="scss"></style>
