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

        <div v-show="state.popupNavi" class="popupNavi">
          <ul>
            <li @handleClick="onDeleteProductClick(product)">削除</li>
            <li>
              <router-link :to="`/admin/product/${product.id}/edit`"> 詳細 </router-link>
            </li>
          </ul>
        </div>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { Product } from "../../types"
import { deleteProduct } from "@/composables/useProducts"

interface ComponentState {
  popupNavi: boolean
}

export default defineComponent({
  name: "AdminProductListRow",
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

    const onDeleteProductClick = (product: Product) => {
      deleteProduct(product.id!)
      // prop! - The "!" means to tell TypeScript that we know ID will be defined here
    }

    return {
      state,
      onDeleteProductClick,
    }
  },
})
</script>
<style scoped>
.popupNavi {
  box-sizing: border-box;
  margin-left: -14px;
  @apply fixed rounded-md w-32 h-20 shadow-md z-10 mt-4 p-4 bg-white;
}
</style>
