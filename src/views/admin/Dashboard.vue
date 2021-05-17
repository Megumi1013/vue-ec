<template>
  <div class="admin">
    <div class="md:flex">
      <admin-sidebar></admin-sidebar>

      <div class="container">
        <admin-header></admin-header>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, onMounted } from "vue"
import { useStore } from "vuex"
import AdminHeader from "@/components/admin/AdminHeader.vue"
import AdminSidebar from "@/components/admin/AdminSidebar.vue"

// type ComponentState = {
//   produceitems: Product[]
// }

export default defineComponent({
  name: "Dashboard",
  components: {
    AdminSidebar,
    AdminHeader,
  },
  props: {},
  setup: function () {
    // vuex
    // const store = useStore()

    // const state: ComponentState = reactive<ComponentState>({
    //   produceItems: store.state.produce.items,
    // })
    //
    // const getAndSetProduceItems = async () => {
    //   await store.dispatch("produce/getAndSetItems")
    // }
    //
    // function passItemIndex(itemIndex: number): void {
    //   store.commit("ITEM_INDEX_OF_REVIEW", itemIndex)
    // }

    // onMounted(getAndSetProduceItems);
    // onMounted(() => {
    //   getAndSetProduceItems()
    // })

    // const deleteItem = async () => {
    //   await store.dispatch("produce/deleteItem")
    // }

    return {}
  },
})
</script>
<style scoped lang="scss"></style>
