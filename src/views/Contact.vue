<template>
  <div class="home">
    <app-header></app-header>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">CONTACT</h1>
    </div>
    <div class="w-9/12 mx-auto"></div>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
// @ is an alias to /src
export default defineComponent({
  name: "CONTACT",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style scoped></style>
