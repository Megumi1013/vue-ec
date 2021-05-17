<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <div class="flex">
      <h1 class="text-xl">商品管理</h1>
      <div class="ml-auto btn btn-primary">
        <router-link to="/admin/item/create"> 新規登録 </router-link>
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
              <tr v-for="(product, productIndex) in products" :key="productIndex">
                <td>{{ product.id }}</td>
                <td class="p-2">
                  {{ product.name }}
                </td>
                <td class="p-2">{{ product.description }}</td>
                <td class="p-2">{{ product.price }}円</td>
                <td class="p-2 flex justify-around">
                  <admin-button class="mr-3" @handleClick="onDeleteProductClick(product)"
                    >削除</admin-button
                  >

                  <router-link
                    :to="`/admin/item/${product.id}/edit`"
                    tag="button"
                    class="btn btn-primary block"
                  >
                    詳細
                  </router-link>
                </td>
              </tr>
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
import { productState, getAndSetProducts, deleteProduct } from "@/composables/useProducts"
import AdminButton from "@/components/admin/AdminButton.vue"
import { Product } from "@/types"

export default defineComponent({
  name: "AdminItemList",
  components: {
    AdminButton,
  },
  props: {},
  setup: function () {
    onMounted(() => {
      getAndSetProducts()
    })

    const onDeleteProductClick = (product: Product) => {
      deleteProduct(product.id!)
    }

    return {
      products: computed(() => productState.products),
      loading: computed(() => productState.loading),
      onDeleteProductClick,
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
