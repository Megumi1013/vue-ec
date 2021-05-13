<!--<template>-->
<!--  <section-->
<!--    v-if="showModal"-->
<!--    @close="closeModal"-->
<!--    role="daialog"-->
<!--    aria-modal="true"-->
<!--    ref="modalRef"-->
<!--  >-->
<!--    <button @click="close">×</button>-->
<!--    <div class="flex">-->
<!--      <h1>商品詳細</h1>-->
<!--    </div>-->
<!--    <div class="flex justify-center">-->
<!--      <div-->
<!--        class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"-->
<!--      ></div>-->
<!--    </div>-->
<!--    <form>-->
<!--      <label class="block my-12 sm:flex items-center">-->
<!--        <div class="text-gray-700 w-1/6">商品名</div>-->
<!--        <input-->
<!--          type="text"-->
<!--          class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"-->
<!--          :value="name"-->
<!--        />-->
<!--      </label>-->

<!--      <label class="block my-12 sm:flex items-center">-->
<!--        <div class="text-gray-700 w-1/6">商品説明</div>-->
<!--        <textarea-->
<!--          class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"-->
<!--          rows="3"-->
<!--          :value="item.description"-->
<!--        ></textarea>-->
<!--      </label>-->

<!--      <label class="block my-12 sm:flex items-center">-->
<!--        <div class="text-gray-700 w-1/6">価格</div>-->
<!--        <input-->
<!--          type="text"-->
<!--          class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"-->
<!--          :value="item.price"-->
<!--        />-->
<!--      </label>-->
<!--    </form>-->
<!--    <div class="flex items-center">-->
<!--      <dashboard-button>登録</dashboard-button>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { ref, defineComponent, reactive } from "vue";-->
<!--import { State } from "@/store/modules/produce";-->
<!--import DashboardButton from "@/components/DashboardButton.vue";-->

<!--type Props = {-->
<!--  showModal: boolean;-->
<!--};-->
<!--export default defineComponent({-->
<!--  name: "DashboardModal",-->
<!--  components: {-->
<!--    DashboardButton,-->
<!--  },-->
<!--  props: {-->
<!--    name: {-->
<!--      type: String,-->
<!--      required: false,-->
<!--    },-->
<!--    description: {-->
<!--      type: String,-->
<!--      required: false,-->
<!--    },-->
<!--    price: {-->
<!--      type: Number,-->
<!--      required: false,-->
<!--    },-->
<!--  },-->
<!--  setup: function (props, context) {-->
<!--    const modal: Props = reactive<Props>({-->
<!--      showModal: false,-->
<!--    });-->

<!--    const openModal = () => {-->
<!--      modal.showModal = true;-->
<!--    };-->
<!--    const closeModal = () => {-->
<!--      modal.showModal = false;-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->
