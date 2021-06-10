<template>
  <tr>
    <td class="p-2">{{ product.id }}</td>
    <td class="p-2">
      {{ product.name }}
    </td>
    <td class="p-2">{{ product.description }}</td>
    <td class="p-2">{{ product.price }}円</td>
    <td class="p-2 flex justify-around">
      <div class="relative">
        <svg
          @click="state.popupNavi = !state.popupNavi"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>

        <div
          v-show="state.popupNavi"
          class="mr-2.5 fixed rounded-md shadow-md z-1 mt-4 p-4 bg-white"
        >
          <ul>
            <li @click="agreementDialog = true" class="p-2 :hover:text-opacity-80 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1.5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              削除
            </li>
            <li class="p-2 :hover:text-opacity-80">
              <router-link :to="`/admin/products/${product.id}/edit`">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2.5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  />
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  /></svg
                >詳細</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <admin-dialog
            :agreementDialog="agreementDialog"
            @onAgreeClick="onItemDelete"
            @onDisagreeClick="onCancel"
            >以下を削除します。よろしいですか。<br />
            商品ID: {{ product.id }}<br />
            商品名: {{ product.name }}
          </admin-dialog>

          <admin-dialog
            :agreementDialog="agreementDialogDeleteComplete"
            @onAgreeClick="onDeleteComplete"
            >削除が完了しました。</admin-dialog
          >
        </div>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue"
import { Product } from "../../types"
import { deleteProduct } from "@/composables/useProducts"
import router from "@/router"
import AdminDialog from "@/components/admin/AdminDialog.vue"

interface ComponentState {
  popupNavi: boolean
}

export default defineComponent({
  name: "AdminProductListRow",
  components: {
    AdminDialog,
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    const state = reactive<ComponentState>({
      popupNavi: false,
    })

    const agreementDialog = ref<boolean>(false)

    const agreementDialogDeleteComplete = ref<boolean>(false)
    console.log("agreementDialogDeleteComplete" + agreementDialogDeleteComplete.value)

    const onCancel = () => {
      agreementDialog.value = false
      state.popupNavi = false
    }

    const onItemDelete = async (): Promise<void> => {
      await deleteProduct(props.product.id!)
      agreementDialog.value = false
      agreementDialogDeleteComplete.value = true
    }

    const onDeleteComplete = () => {
      router.push({ name: "AdminProductList" })
    }

    return {
      state,
      agreementDialog,
      agreementDialogDeleteComplete,
      onCancel,
      onItemDelete,
      onDeleteComplete,
    }
  },
})
</script>
<style scoped></style>
