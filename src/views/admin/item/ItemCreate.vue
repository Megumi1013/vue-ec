<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <admin-item-form @save="createItem"></admin-item-form>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import AdminItemForm from "@/components/admin/AdminItemForm.vue"
import { productState, createProduct } from "@/composables/useProducts"
import { Product } from "@/types"

export default defineComponent({
  name: "DashboardItemCreate",
  components: {
    AdminItemForm,
  },
  setup: function (props) {
    const createItem = (product: Product) => {
      createProduct(product)
    }

    return {
      product: computed(() => productState.product),
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
