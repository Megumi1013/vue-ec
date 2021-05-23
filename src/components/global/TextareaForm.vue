<template>
  <textarea v-model="value" rows="3" />
</template>

<script lang="ts">
import { computed, defineComponent, WritableComputedRef } from "vue"

export default defineComponent({
  name: "TextareaForm",
  components: {},
  props: {
    modelValue: {
      type: String,
      required: false,
    },
  },
  // props: ["modelValue"],
  emits: ["update:modelValue"],

  setup: function (props, { emit }) {
    const value: WritableComputedRef<any> = computed({
      get(): string | undefined {
        return props.modelValue
      },
      set(value): void {
        emit("update:modelValue", value)
      },
    })

    return {
      value,
    }
  },
})
</script>
<style scoped>
textarea {
  @apply p-3 mt-3 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
}
</style>
