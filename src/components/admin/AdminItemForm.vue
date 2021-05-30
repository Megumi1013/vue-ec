<template>
  <div class="flex justify-center">
    <div class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"></div>
  </div>

  <label class="block my-12 sm:flex items-center">
    <div class="text-gray-700 w-1/6">商品名</div>

    <div v-if="!anyLoading" class="w-full">
      <input-form v-model="product.name" />
    </div>
    <div v-else class="rounded-md bg-gray-200 animate-pulse w-full h-11"></div>
  </label>

  <label class="block my-12 sm:flex items-center">
    <div class="text-gray-700 w-1/6">商品説明</div>
    <div v-if="!anyLoading" class="w-full">
      <textarea-form v-model="product.description" />
    </div>
    <div v-else class="rounded-md bg-gray-200 animate-pulse w-full h-24"></div>
  </label>

  <label class="block my-12 sm:flex items-center">
    <div class="text-gray-700 w-1/6">価格</div>

    <div v-if="!anyLoading" class="w-full flex items-baseline">
      <div class="w-40 mr-3">
        <input-form v-model="product.price"></input-form>
      </div>
      <div>円</div>
    </div>

    <div v-else class="rounded-md bg-gray-200 animate-pulse w-full h-11"></div>
  </label>

  <!--  <button @click="onSaveClick" class="btn btn-primary" :disabled="!product || anyLoading">-->
  <!--    登録-->
  <!--  </button>-->
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"
import { Product } from "@/types"
import InputForm from "@/components/global/InputForm.vue"
import TextareaForm from "@/components/global/TextareaForm.vue"

export default defineComponent({
  name: "adminItemForm",

  components: {
    TextareaForm,
    InputForm,
  },

  props: {
    modelValue: {
      type: Object as () => Product | null,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: ["update:modelValue", "save"],

  setup: function (props, { emit }) {
    // const onSaveClick = (): void => {
    //   emit("save")
    // }

    const product: WritableComputedRef<Product | null> = computed({
      get(): Product | null {
        return props.modelValue
      },
      set(): void {
        emit("update:modelValue", product)
      },
    })

    const anyLoading: WritableComputedRef<boolean> = computed(() => props.loading || !product.value)

    return {
      product,
      anyLoading,
      // onSaveClick,
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
