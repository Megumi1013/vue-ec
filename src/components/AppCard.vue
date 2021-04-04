<template>
  <router-link
    to="/"
    class="md:w-1/4 w-full my-10 md:my-0 p-6 max-w-sm mx-auto bg-white rounded-sm shadow-md space-x-4"
  >
    <div>
      <div class="flex justify-center items-center">
        <img class="h-12 w-12" :src="src" :alt="itemName" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">{{ itemName }}</div>
        <p class="text-gray-500">{{ itemDetail }}</p>
        <p class="text-sm text-gray-500">{{ itemPrice }}</p>
      </div>
    </div>
  </router-link>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppCard",
  props: {
    src: {
      type: String,
      required: true,
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
  },
});
</script>
