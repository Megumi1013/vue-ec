<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <h1 class="text-xl">商品の登録</h1>
    <admin-item-form v-model="state.product"></admin-item-form>
    <div class="md:flex">
      <div>
        <admin-button @handleClick="agreementDialog = true" class="mr-3">キャンセル</admin-button>
        <admin-dialog
          :agreementDialog="agreementDialog"
          @onAgreeClick="onAgree"
          @onDisagreeClick="onCancel"
          >入力中のデータは削除されますがよろしいですか？</admin-dialog
        >
      </div>

      <div>
        <admin-button @handleClick="onSave" :disabled="anyLoading" class="btn-primary"
          >登録</admin-button
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, WritableComputedRef } from "vue"
import { productsState, newProduct, createProduct } from "@/composables/useProducts"
import { Product } from "@/types"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"
import AdminButton from "@/components/admin/AdminButton.vue"
import AdminDialog from "@/components/admin/AdminDialog.vue"
import router from "@/router"

interface ComponentState {
  product: Product | null
}

export default defineComponent({
  name: "adminProductCreate",
  components: {
    AdminItemForm,
    AdminButton,
    AdminDialog,
  },
  setup: function () {
    const state = reactive<ComponentState>({
      product: null,
    })

    const agreementDialog = ref<boolean>(false)

    onMounted(() => {
      newProduct()
      state.product = productsState.product
    })

    const onSave = () => {
      createProduct(state.product!)
    }

    const anyLoading: WritableComputedRef<boolean> = computed(() => productsState.loading)

    const onAgree = () => {
      router.push({ name: "AdminProductList" })
    }

    const onCancel = () => {
      agreementDialog.value = false
    }

    return {
      state,
      anyLoading,
      agreementDialog,
      onSave,
      onAgree,
      onCancel,
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
