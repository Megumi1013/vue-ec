<template>
  <div class="dashboard">
    <div class="md:flex">
      <dashboard-sidebar></dashboard-sidebar>
      <section class="w-full">
        <div class="container">
          <dashboard-header></dashboard-header>
          <section class="md:w-full sm:w-11/12 p-10 text-left">
            <div class="flex items-center">
              <h1>商品管理</h1>
              <dashboard-button class="ml-auto bg-blue-300"
                >新規登録</dashboard-button
              >
            </div>
            <div>
              <table class="w-full my-3">
                <tr class="border-gray-200">
                  <th class="p-2">商品名</th>
                  <th class="p-2">商品説明</th>
                  <th class="p-2">価格</th>
                  <th class="p-2"></th>
                </tr>

                <tr v-for="(item, itemIndex) in produceItems" :key="itemIndex">
                  <td class="p-2">
                    {{ item.name }}
                  </td>
                  <td class="p-2">{{ item.description }}</td>
                  <td class="p-2">{{ item.price }}円</td>
                  <td class="p-2">
                    <dashboard-button class="mr-3">削除</dashboard-button>
                    <dashboard-button
                      @handleClick="openModal"
                      class="bg-blue-300"
                      ref="openModalBtn"
                      >編集</dashboard-button
                    >
                  </td>
                </tr>
              </table>
            </div>
          </section>
        </div>
      </section>

      <dashboard-modal
        v-if="isModalOpened"
        @close="closeModal"
        :prev-ref="openModalBtn"
      >
      </dashboard-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import DashboardButton from "@/components/DashboardButton.vue";
import DashboardModal from "@/components/DashboardModal.vue";
import { State } from "@/store/modules/produce";

type ComponentState = State;

export default defineComponent({
  name: "Dashboard",
  components: {
    DashboardButton,
    DashboardSidebar,
    DashboardHeader,
    DashboardModal,
  },
  props: {},
  setup: function (props) {
    const store = useStore();

    // Get Produce Items

    const getAndSetProduceItems = async () => {
      await store.dispatch("produce/getAndSetItems");
    };

    onMounted(getAndSetProduceItems);

    return {
      produceItems: computed(() => store.state.produce.items),
    };

    // eslint-disable-next-line no-unreachable
    const isModalOpened = ref(false);

    const openModalBtn = ref(null);

    const openModal = () => {
      isModalOpened.value = true;
    };
    // eslint-disable-next-line no-unreachable
    const closeModal = () => {
      isModalOpened.value = false;
    };
  },
  data() {
    return {
      showModal: false,
    };
  },
});
</script>
