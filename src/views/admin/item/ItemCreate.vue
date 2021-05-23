<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <h1 class="text-xl">商品の登録</h1>
    <admin-item-form v-model="state.product" @save="createItem"></admin-item-form>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"
import { productsState, newProduct, createProduct } from "@/composables/useProducts"
import { Product } from "@/types"

interface ComponentState {
  product: Product | null
}

export default defineComponent({
  name: "DashboardItemCreate",
  components: {
    AdminItemForm,
  },
  setup: function (props) {
    const state = reactive<ComponentState>({
      product: null,
    })

    onMounted(() => {
      newProduct()
      state.product = productsState.product
    })

    const createItem = (product: Product) => {
      createProduct(product)
    }

    return {
      state,
      createItem,
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
