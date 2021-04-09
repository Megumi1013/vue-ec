<template>
  <div class="dashboard">
    <div class="md:flex">
      <dashboard-sidebar></dashboard-sidebar>
      <section class="w-full">
        <dashboard-header></dashboard-header>
        <section class="md:w-full sm:w-11/12 p-10 text-left">
          <h1>商品管理</h1>
          <div>
            <table class="w-full my-3">
              <tr class="border-gray-200">
                <th class="p-2">商品名</th>
                <th class="p-2">商品説明</th>
                <th class="p-2">価格</th>
                <th class="p-2"></th>
              </tr>

              <tr>
                <td class="p-2">
                  <router-link to="/" class="w-full block"
                    >にんじん</router-link
                  >
                </td>
                <td class="p-2">美味しいにんじんにんじん</td>
                <td class="p-2">300円</td>
                <td class="p-2">
                  <dashboard-button>削除</dashboard-button>
                </td>
              </tr>
            </table>
          </div>
        </section>
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
import { State } from "@/store/modules/items";

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
