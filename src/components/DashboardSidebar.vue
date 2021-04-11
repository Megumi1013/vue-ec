<template>
  <div
    class="sidebar rounded-md py-3 px-8 h-screen h-vh shadow-md text-gray-500 hidden md:block"
  >
    <ul class="text-left">
      <li class="p-4"><router-link to="/">LOGO</router-link></li>
      <li class="p-4"><router-link to="/dashboard">商品</router-link></li>
      <li class="p-4"><router-link to="/reviews">レビュー</router-link></li>
    </ul>
  </div>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardSidebar",
  props: {},
});
</script>

<style scoped>
.sidebar {
  margin: 1.6rem;
  width: 260px;
}
</style>
