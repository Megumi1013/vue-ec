<template>
  <router-link
    :to="`/products/${product.id}/${product.name}`"
    class="md:w-1/4 w-full my-10 md:my-0 p-6 max-w-sm mx-auto bg-white space-x-4"
  >
    <div>
      <div class="flex justify-center items-center"></div>
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
        <router-link :to="`/products/${product.id}/${product.name}`" class="">購入する</router-link>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Product } from "@/types"
export default defineComponent({
  name: "PublicCard",
  components: {},
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
})
</script>
