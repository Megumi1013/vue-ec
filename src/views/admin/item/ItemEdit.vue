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

    <div class="md:flex md:justify-between">
      <div>
        <admin-button
          @handleClick="onItemSave"
          :disabled="!state.productToEdit || anyLoading"
          class="btn-primary"
          >登録</admin-button
        >
      </div>
      <div>
        <admin-button @handleClick="onItemReset" class="ml-3">リセット</admin-button>
      </div>
      <div class="md:ml-auto">
        <admin-button @handleClick.stop="agreementDialog.value = true" class="ml-3 btn-danger"
          >削除</admin-button
        >
        <admin-dialog :agreementDialog="agreementDialog.value"
          >この商品を削除します。よろしいですか。</admin-dialog
        >
      </div>
    </div>
    <!--    <admin-reviews></admin-reviews>-->
  </section>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  WritableComputedRef,
} from "vue"
import {
  productsState,
  getAndSetProduct,
  deleteProduct,
  updateProduct,
} from "@/composables/useProducts"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"
import AdminReviews from "@/components/admin/AdminReviews.vue"
import { Product } from "@/types"
import AdminButton from "@/components/admin/AdminButton.vue"
import AdminDialog from "@/components/admin/AdminDialog.vue"

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
    const agreementDialog = ref(false)

    onMounted(() => {
      setProductInForm()
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
    }

    const onItemReset = () => {
      state.productToEdit = state.product
    }
    // let { product, productToEdit } = toRefs(state)

    const anyLoading: WritableComputedRef<boolean> = computed(() => productsState.loading)

    return {
      state,
      anyLoading,
      onItemSave,
      onItemDelete,
      onItemReset,
      agreementDialog,
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
