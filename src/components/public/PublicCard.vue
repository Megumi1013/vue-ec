<template>
  <router-link
    :to="`/item/${product.id}`"
    class="md:w-1/4 w-full my-10 md:my-0 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4"
  >
    <div>
      <div class="flex justify-center items-center">
        <img class="h-12 w-12" :src="src" :alt="product.name" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">
          {{ product.name }}
        </div>
        <div class="my-2">
          <p class="text-gray-500">{{ product.description }}</p>
          <p class="text-sm text-gray-500">{{ product.price }}円</p>
        </div>
        <div>
          個数
          <select name="quantity" id="" class="px-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <router-link :to="`/item/${product.id}`" class=""> 詳細はこちら </router-link>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PublicButton from "@/components/public/PublicButton"
import { Product } from "@/types"
export default defineComponent({
  name: "PublicCard",
  components: {
    // PublicButton
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
})
</script>
