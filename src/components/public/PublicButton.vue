<template>
  <button type="submit" class="btn mt-3" :class="color" @click="handleClick">{{ text }}</button>
</template>

<script language="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "PublicButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "登録",
    },
    color: {
      type: String,
      required: false,
      default: "bg-green-700",
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
  @apply font-bold py-2 px-4 rounded text-white;
}
</style>
