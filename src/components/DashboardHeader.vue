<template>
  <ul class="flex px-8 py-3 shadow-sm text-gray-500">
    <li class="mr-8"><router-link to="/">LOGO</router-link></li>
    <li><router-link to="/about">SOMETHING</router-link></li>
    <li class="ml-auto">SOMETHING</li>
  </ul>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardHeader",
  props: {},
});
</script>
