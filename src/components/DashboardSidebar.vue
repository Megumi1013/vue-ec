<template>
  <ul class="h-screen shadow-md text-gray-500 w-1/6 hidden md:block">
    <li class="p-4"><router-link to="/">LOGO</router-link></li>
    <li class="p-4"><router-link to="/about">SOMETHING</router-link></li>
    <li class="p-4">SOMETHING</li>
  </ul>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardSidebar",
  props: {},
});
</script>
