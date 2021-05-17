<template>
  <div class="flex">
    <h1 class="text-xl">商品詳細</h1>
  </div>

  <div class="flex justify-center">
    <div class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"></div>
  </div>

  <label class="block my-12 sm:flex items-center">
    <div class="text-gray-700 w-1/6">商品名</div>

    <div v-if="!product">Waiting..</div>

    <input
      v-else
      type="text"
      class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      v-model="product.name"
    />
  </label>

  <label class="block my-12 sm:flex items-center">
    <div class="text-gray-700 w-1/6">商品説明</div>

    <div v-if="!product">Waiting..</div>

    <textarea
      v-else
      class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      rows="3"
      v-model="product.description"
    ></textarea>
  </label>

  <label class="block my-12 sm:flex items-center">
    <div class="text-gray-700 w-1/6">価格</div>

    <div v-if="!product">Waiting..</div>

    <input
      v-else
      type="text"
      class="p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      v-model="product.price"
    />
  </label>

  <button @click="onSaveClick" class="btn btn-primary" :disabled="!product">登録</button>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef, onMounted } from "vue"
import { Product } from "@/types"
import { productState, getAndSetProduct } from "@/composables/useProducts"

export default defineComponent({
  name: "adminItemForm",

  components: {},

  props: {
    id: {
      required: false,
    },
    modelValue: {
      type: Object as () => Product,
      required: true,
    },
  },

  emits: ["update:modelValue", "save"],

  setup: function (props, { emit }) {
    onMounted(() => {
      // getAndSetProduct(props.id)
    })

    const onSaveClick = (): void => {
      emit("save")
    }

    const product: WritableComputedRef<Product> = computed({
      get(): Product {
        return props.modelValue
      },
      set(): void {
        emit("update:modelValue", productState.product)
      },
    })

    return {
      product,
      onSaveClick,
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
