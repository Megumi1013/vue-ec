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
import { defineComponent } from "vue"
import AdminHeader from "@/components/admin/AdminHeader.vue"
import AdminSidebar from "@/components/admin/AdminSidebar.vue"

export default defineComponent({
  name: "Dashboard",
  components: {
    AdminSidebar,
    AdminHeader,
  },
  props: {},
  setup: function () {
    return {}
  },
})
</script>
<style scoped lang="scss"></style>
