<template>
  <div class="home">
    <public-header></public-header>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">CONTACT</h1>
    </div>
    <div class="w-9/12 mx-auto"></div>
    <public-footer></public-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PublicHeader from "@/components/public/PublicHeader.vue"
import PublicFooter from "@/components/public/PublicFooter.vue"
// @ is an alias to /src
export default defineComponent({
  name: "CONTACT",
  components: {
    PublicHeader,
    PublicFooter,
  },
})
</script>

<style scoped></style>
