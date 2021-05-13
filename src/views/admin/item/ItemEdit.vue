<template>
  <div>
    <div v-if="produceLoading">Loading</div>
    <div v-else>
      <h3 v-if="item">Editing Item: {{ item.name }}</h3>
    </div>
    <admin-item-form v-model="itemToEdit" @save="onItemSave"></admin-item-form>
    <admin-reviews></admin-reviews>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, onMounted, toRefs } from "vue"
import { ActionContext, useStore } from "vuex"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"
import AdminReviews from "@/components/admin/AdminReviews.vue"
import { Produce } from "@/types"

type ComponentState = {
  item: Produce | null
  itemToEdit: Produce | null
}

export default defineComponent({
  name: "AdminItemEdit",
  components: {
    AdminItemForm,
    AdminReviews,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup: function (props) {
    const store = useStore()

    const state: ComponentState = reactive<ComponentState>({
      item: null,
      itemToEdit: null,
    })

    const getAndSetItem = async (): Promise<void> => {
      await store.dispatch("produce/getAndSetItem", props.id)
      state.item = { ...store.getters["produce/item"] }
      state.itemToEdit = { ...store.getters["produce/item"] }
    }

    onMounted(() => {
      getAndSetItem()
    })

    const onItemSave = async (formData: ActionContext<any, any>): Promise<void> => {
      console.log(state)
    }

    let { item, itemToEdit } = toRefs(state)

    return {
      item,
      itemToEdit,
      produceLoading: computed(() => store.getters["produce/loading"]),
      onItemSave,
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
