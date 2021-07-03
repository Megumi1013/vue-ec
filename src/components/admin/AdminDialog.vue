<template>
  <section v-if="dialog" class="modalWrapper" @click.stop="onDisagreeClick">
    <div class="modal">
      <div class="mb-4">
        <slot></slot>
      </div>

      <admin-button @handleClick="onDisagreeClick" class="mr-5" v-if="disagree">{{
        disagreeText
      }}</admin-button>
      <admin-button @handleClick="onAgreeClick" color="btn-primary" v-if="agree">{{
        agreeText
      }}</admin-button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, WritableComputedRef } from "vue"
import AdminButton from "@/components/admin/AdminButton.vue"

export default defineComponent({
  name: "AdminDialog",
  components: {
    AdminButton,
  },
  props: {
    agreementDialog: {
      type: Boolean,
      required: false,
      default: false,
    },
    disagreeText: {
      type: String,
      required: false,
      default: "いいえ",
    },
    agreeText: {
      type: String,
      required: false,
      default: "はい",
    },
    disagreeButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    agreeButton: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  emits: [
    "update:agreementDialog",
    "onAgreeClick",
    "onDisagreeClick",
    "update:disagreeButton",
    "update:agreeButton",
  ],

  setup: function (props, { emit }) {
    // const onAgreeClick = (): void => {
    //   emit("agree")
    // }
    const dialog: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return props.agreementDialog
      },
      set(): void {
        emit("update:agreementDialog", dialog)
      },
    })

    const disagree: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return props.disagreeButton
      },
      set(): void {
        emit("update:disagreeButton", disagree)
      },
    })

    const agree: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return props.agreeButton
      },
      set(): void {
        emit("update:agreeButton", agree)
      },
    })

    const onAgreeClick = (): void => {
      emit("onAgreeClick")
    }

    const onDisagreeClick = (): void => {
      emit("onDisagreeClick")
    }

    return {
      onAgreeClick,
      onDisagreeClick,
      dialog,
      disagree,
      agree,
    }
  },
})
</script>

<style scoped>
.modalWrapper {
  display: flex;
  flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
  align-items: center; /* 子要素をflexboxにより中央に配置する */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal {
  margin: 10% auto; /* 15% from the top and centered */
  width: 600px;
  max-width: 90%;
  box-sizing: border-box;
  background: #fffdf9;
  padding: 2rem;
  @apply rounded-lg shadow-lg absolute text-center;
}
</style>
