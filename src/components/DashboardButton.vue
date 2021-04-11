<template>
  <button type="submit" class="btn" :class="color" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script language="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "DashboardButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "bg-gray-400",
    },
  },
  setup: function (props, context) {
    const handleClick = () => {
      context.emit("handleClick");
    };
  },
});
</script>
<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded text-white;
}
</style>
