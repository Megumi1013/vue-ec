<template>
  <div class="admin">
    <div class="md:flex">
      <admin-sidebar></admin-sidebar>
      <div class="container">
        <admin-header></admin-header>
        <admin-item-form @save="createItem"></admin-item-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import { useStore } from "vuex"
import AdminHeader from "@/components/admin/AdminHeader.vue"
import AdminSidebar from "@/components/admin/AdminSidebar.vue"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"

export default defineComponent({
  name: "DashboardItemCreate",
  components: {
    AdminHeader,
    AdminSidebar,
    AdminItemForm,
  },
  setup: function (props) {
    const store = useStore()

    const getAndSetReviewItems = async () => {
      await store.dispatch("produce/getAndSetReviews")
    }

    const createItem = async (): Promise<void> => {
      await store.dispatch("produce/createAndSetItem")
    }

    onMounted(() => {
      getAndSetReviewItems()
    })

    return {
      produceItem: computed(() => store.state.produce.item),
      reviewItems: computed(() => store.state.produce.reviews),
      createItem,
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
