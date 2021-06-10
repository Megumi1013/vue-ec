<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <div class="flex">
      <h1 class="text-xl">商品</h1>
      <div class="ml-auto">
        <router-link to="/admin/products/create">
          <admin-button color="btn-primary">新規登録</admin-button>
        </router-link>
      </div>
    </div>
    <div>
      <div v-if="products">
        <div v-if="loading">...Loading</div>
        <div v-else-if="!loading">
          <table class="w-full my-3">
            <thead>
              <tr class="border-gray-200">
                <th class="p-2">商品ID</th>
                <th class="p-2">商品名</th>
                <th class="p-2">商品説明</th>
                <th class="p-2">価格</th>
                <th class="p-2"></th>
              </tr>
            </thead>

            <tbody>
              <admin-item-list-row
                v-for="product in products"
                :product="product"
                :key="product.id"
              ></admin-item-list-row>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else class="alert-light">商品が登録されていません。</div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import { productsState, getAndSetProducts, deleteProduct } from "@/composables/useProducts"
import AdminButton from "@/components/admin/AdminButton.vue"
import AdminItemListRow from "@/components/admin/AdminItemListRow.vue"

export default defineComponent({
  name: "AdminItemList",
  components: {
    AdminButton,
    AdminItemListRow,
  },
  props: {},
  setup: function () {
    onMounted(() => {
      getAndSetProducts()
    })

    return {
      products: computed(() => productsState.products),
      loading: computed(() => productsState.loading),
    }
  },
})
</script>
<style scoped>
body {
  background: #d5eef2;
}
</style>
