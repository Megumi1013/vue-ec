<template>
  <ul class="flex px-8 py-6 shadow-md text-gray-500">
    <li class="mr-8"><router-link to="/">TOP</router-link></li>
    <li><router-link to="/about">SHOP</router-link></li>
    <li class="ml-auto"><router-link to="/contact">CONTACT</router-link></li>
  </ul>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppHeader",
  props: {},
});
</script>
