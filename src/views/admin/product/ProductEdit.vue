<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <div>
      <h1 class="text-xl">商品の詳細</h1>
      <h2 v-if="state.product">{{ state.product.name }}</h2>
    </div>

    <admin-item-form
      v-model="state.productToEdit"
      :loading="anyLoading"
      @save="onItemSave"
    ></admin-item-form>

    <div class="my-24">
      <h2>この商品のレビュー</h2>
      <div v-if="reviews">
        <div
          v-if="reviewsLoading"
          class="mt-5 mb-8 rounded-md bg-gray-200 animate-pulse w-full h-16"
        ></div>
        <div v-else>
          <table class="w-full my-3">
            <thead>
              <tr class="border-gray-200">
                <th class="p-2">レビューID</th>
                <th class="p-2">登録者</th>
                <th class="p-2">レビュー内容</th>
                <th class="p-2">星の数</th>
                <th class="p-2">作成日</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(review, productIndex) in reviews" :key="productIndex">
                <td class="p-2">{{ review.id }}</td>
                <td class="p-2">
                  {{ review.name }}
                </td>
                <td class="p-2">{{ review.content }}</td>
                <td class="p-2">{{ review.star }}</td>
                <td class="p-2">{{ review.created_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else class="alert-light">レビューが登録されていません。</div>
    </div>

    <div class="md:flex md:justify-between">
      <div>
        <admin-button
          @handleClick="onItemSave"
          :disabled="!state.productToEdit || anyLoading"
          class="btn-primary"
          >再登録</admin-button
        >
      </div>
      <div>
        <admin-button @handleClick="onItemReset" class="ml-3">編集をリセット</admin-button>
      </div>
      <div class="md:ml-auto">
        <admin-button @handleClick="agreementDialog = true" class="ml-3 btn-danger"
          >削除</admin-button
        >
        <admin-dialog
          :agreementDialog="agreementDialog"
          @onAgreeClick="onItemDelete"
          @onDisagreeClick="onCancel"
          >この商品を削除します。よろしいですか。</admin-dialog
        >

        <admin-dialog
          :agreementDialog="agreementDialogDeleteComplete"
          @onAgreeClick="onDeleteComplete"
          disagree-button="false"
          >削除が完了しました。</admin-dialog
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  WritableComputedRef,
} from "vue"
import {
  productsState,
  getAndSetProduct,
  deleteProduct,
  updateProduct,
} from "@/composables/useProducts"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"
import { Product } from "@/types"
import AdminButton from "@/components/admin/AdminButton.vue"
import AdminDialog from "@/components/admin/AdminDialog.vue"
import { getAndSetProductReviews, reviewsState } from "@/composables/useReviews"
import router from "@/router"

interface ComponentState {
  product: Product | null
  productToEdit: Product | null
}

export default defineComponent({
  name: "AdminItemEdit",
  components: {
    AdminDialog,
    AdminButton,
    AdminItemForm,
    //AdminReviews,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup: function (props) {
    const state = reactive<ComponentState>({
      product: null,
      productToEdit: null,
    })
    const agreementDialog = ref<boolean>(false)
    const agreementDialogDeleteComplete = ref<boolean>(false)

    onMounted(() => {
      setProductInForm()
      getAndSetProductReviews(props.id)
    })

    const setProductInForm = async (): Promise<void> => {
      await getAndSetProduct(props.id)

      state.product = productsState.product
      state.productToEdit = Object.assign({}, productsState.product)
    }

    const onItemSave = async (product: Product): Promise<void> => {
      await updateProduct(props.id, product)
    }

    const onItemDelete = async (): Promise<void> => {
      await deleteProduct(props.id)
      agreementDialog.value = false
      agreementDialogDeleteComplete.value = true
    }
    const onCancel = () => {
      agreementDialog.value = false
    }
    const onItemReset = () => {
      state.productToEdit = state.product
    }

    const onDeleteComplete = () => {
      router.push({ name: "AdminProductList" })
    }

    const anyLoading: WritableComputedRef<boolean> = computed(() => productsState.loading)

    return {
      state,
      anyLoading,
      onItemSave,
      onItemDelete,
      onDeleteComplete,
      onItemReset,
      agreementDialog,
      agreementDialogDeleteComplete,
      onCancel,
      reviews: computed(() => reviewsState.reviews),
      reviewsLoading: computed(() => reviewsState.loading),
    }
  },
})
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
