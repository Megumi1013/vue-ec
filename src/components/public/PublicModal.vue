<template>
  <public-button text="レビューを登録" @handleClick="showModal" />

  <section v-if="showModal" @close="closeModal" role="daialog" aria-modal="true" ref="modalRef">
    <button @click="close">×</button>

    <div class="flex justify-center">
      <div class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"></div>
    </div>
    <form>
      <label class="block my-12 sm:flex items-center">
        <div class="text-gray-700 w-1/6">名前</div>
        <input
          type="text"
          class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          v-model="state.name"
        />
      </label>

      <label class="block my-12 sm:flex items-center">
        <div class="text-gray-700 w-1/6">スターの数</div>
        <select v-model="state.stars" name="star" id="star">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <label class="block my-12 sm:flex items-center">
        <div class="text-gray-700 w-1/6">レビュー内容</div>
        <textarea
          class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="3"
          v-model="state.context"
        ></textarea>
      </label>
    </form>
    <div class="flex items-center">
      <public-button text="登録" @handleClick="submitReview" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
// import { State } from "@/store/modules/produce"
import PublicButton from "./PublicButton.vue"
import { useStore } from "vuex"

type Props = {
  showModal: boolean
}

type ComponentState = {
  name: string
  stars: number
  context: string
}
export default defineComponent({
  name: "DashboardModal",
  components: {
    PublicButton,
  },
  props: {},
  setup: function (props, context) {
    const store = useStore()

    const modal: Props = reactive<Props>({
      showModal: false,
    })

    const state: ComponentState = reactive<ComponentState>({
      name: "",
      stars: 0,
      context: "",
    })

    const openModal = () => {
      modal.showModal = true
    }
    const closeModal = () => {
      modal.showModal = false
    }

    const submitReview = async (params) => {
      params = {
        name: state.name,
        stars: state.stars,
        context: "state.context",
      }
      await store.dispatch("produce/getAndSetReviews")
    }

    return {
      modal,
      state,
      openModal,
      closeModal,
      submitReview,
    }
  },
})
</script>
