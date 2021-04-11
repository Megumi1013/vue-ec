<template>
  <section role="daialog" aria-modal="true" ref="modalRef">
    <button @click="close">×</button>
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
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { State } from "@/store/modules/produce";

type ComponentState = State;

export default defineComponent({
  name: "DashboardModal",
  components: {},
  props: {},
  setup: function (props, context) {
    const modalRef = ref(null);
    const close = () => {
      context.emit("close");
    };
  },
});
</script>
