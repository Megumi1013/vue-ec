<template>
  <button type="submit" class="btn" :class="color" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script language="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "adminButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "bg-gray-400",
    },
  },
  setup: function (props, context) {
    const handleClick = () => {
      context.emit("handleClick")
    }
    return {
      handleClick,
    }
  },
})
</script>
<style scoped>
.btn {
  @apply font-bold rounded-full py-2 px-6 text-white shadow-md hover:shadow-lg duration-700;
}
</style>
