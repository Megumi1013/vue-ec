<template>
  <div>
    <input :value="value" :placeholder="placeholder" :class="type" @input="onChange" />
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "InputText",
  props: {
    type: {
      type: String,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    callback: {
      type: Function,
      default: null,
    },
  },
  setup(props) {
    const onChange = (e) => {
      props.callback(e.target.value)
    }
  },
})
</script>
