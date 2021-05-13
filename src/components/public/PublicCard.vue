<template>
  <router-link
    to="/top"
    class="md:w-1/4 w-full my-10 md:my-0 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4"
  >
    <div>
      <div class="flex justify-center items-center">
        <img class="h-12 w-12" :src="src" :alt="itemName" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">
          {{ itemName }}
        </div>
        <div class="my-2">
          <p class="text-gray-500">{{ itemDetail }}</p>
          <p class="text-sm text-gray-500">{{ itemPrice }}円</p>
        </div>
        <div>
          個数
          <select name="quantity" id="" class="px-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <router-link :to="routerLink" tag="button" class="btn bg-green-700 block">
          購入する
        </router-link>
      </div>
    </div>
  </router-link>
</template>

<script language="ts">
import { defineComponent } from "vue"
import PublicButton from "@/components/public/PublicButton"
export default defineComponent({
  name: "PublicCard",

  components: {
    // PublicButton
  },
  props: {
    src: {
      type: String,
      required: false,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: String,
      required: true,
    },
    itemDetail: {
      type: String,
      required: true,
    },
    routerLink: {
      type: String,
      required: true,
    },
  },
})
</script>
