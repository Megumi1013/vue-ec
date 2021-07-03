<template>
  <public-header></public-header>
  <div class="bg-fruit h-80"></div>
  <section class="my-14">
    <h1 class="text-3xl mb-5">ABOUT US</h1>
    <p>美味しい新鮮な野菜屋さん</p>
  </section>
  <section>
    <router-link to="/products">商品一覧へ</router-link>
  </section>
  <public-footer></public-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PublicHeader from "@/components/public/PublicHeader.vue"
import PublicFooter from "@/components/public/PublicFooter.vue"

// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    PublicHeader,
    PublicFooter,
  },
})
</script>

<style scoped>
.bg-fruit {
  background: url(../../assets/img_main_visual.jpg) no-repeat fixed center;
  background-size: 1600px 1600px;
}
</style>
