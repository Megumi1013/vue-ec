<template>
  <div class="dashboard">
    <div class="md:flex">
      <dashboard-sidebar></dashboard-sidebar>
      <section class="w-full">
        <div class="container">
          <dashboard-header></dashboard-header>
          <section class="md:w-full sm:w-11/12 p-10 text-left">
            <div class="flex">
              <h1>商品詳細</h1>
            </div>
            <div class="flex justify-center">
              <div
                class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"
              ></div>
            </div>
            <form>
              <label class="block my-12 sm:flex items-center">
                <div class="text-gray-700 w-1/6">商品名</div>
                <input
                  type="text"
                  class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="パイナップル"
                />
              </label>

              <label class="block my-12 sm:flex items-center">
                <div class="text-gray-700 w-1/6">商品説明</div>
                <textarea
                  class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                  placeholder="宮崎県の佐藤さんのパイナップル"
                ></textarea>
              </label>

              <label class="block my-12 sm:flex items-center">
                <div class="text-gray-700 w-1/6">価格</div>
                <input
                  type="text"
                  class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="400"
                />
              </label>
            </form>
            <div class="flex items-center">
              <dashboard-button>登録</dashboard-button>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import DashboardButton from "@/components/DashboardButton.vue";
import { State } from "@/store/modules/produce";

export default defineComponent({
  name: "Dashboard",
  components: {
    DashboardButton,
    DashboardSidebar,
    DashboardHeader,
  },
  props: {},
  setup: function (props) {
    console.log(props);

    return {};
  },
});
</script>
<style scoped>
.item-img {
  width: 250px;
  height: 250px;
}
</style>
