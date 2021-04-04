<template>
  <button type="submit" class="btn" :color="color">
    <slot></slot>
  </button>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardButton",
  props: {
    color: {
      type: String,
      required: false,
    },
  },
});
</script>
<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
}
.btn-gray {
  @apply bg-gray-500 hover:bg-gray-700 text-white;
}
</style>
