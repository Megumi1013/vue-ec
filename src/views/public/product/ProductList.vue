<template>
  <div class="product-list">
    <public-header></public-header>
    <div class="bg-fruit h-80"></div>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>
    </div>

    <div v-if="loading">...Loading</div>
    <div v-else>
      <div v-if="products" class="w-9/12 mx-auto">
        <div class="md:flex md:my-16">
          <public-card v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
      <div v-else-if="!products">商品を準備中です。</div>
    </div>
    <public-footer></public-footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import PublicHeader from "@/components/public/PublicHeader.vue"
import PublicFooter from "@/components/public/PublicFooter.vue"
import PublicCard from "@/components/public/PublicCard.vue"
import { getAndSetProducts, productsState } from "@/composables/useProducts"

// @ is an alias to /src

export default defineComponent({
  name: "ProductList",

  components: {
    PublicCard,
    PublicHeader,
    PublicFooter,
  },

  setup() {
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

<style scoped></style>
