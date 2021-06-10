<template>
  <ul class="flex items-center px-8 py-4 text-gray-500">
    <li class="mr-8">
      <router-link to="/"><h1 class="text-2xl">LOGO</h1></router-link>
    </li>
    <li class="ml-auto mr-8">
      <router-link to="/contact">CONTACT</router-link>
    </li>
    <li>
      <router-link to="/admin">LOGIN</router-link>
    </li>
  </ul>
</template>

<script language="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "PublicHeader",
  props: {},
})
</script>
