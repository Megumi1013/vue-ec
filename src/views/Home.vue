<template>
  <div class="home">
    <app-header></app-header>
    <div class="bg-fruit h-80"></div>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>
    </div>
    <div class="w-9/12 mx-auto">
      <div class="md:flex md:my-16">
        <app-card
          src=""
          itemName="にんじん"
          itemDetail="美味しいにんじんにんじん"
          itemPrice="300円"
        />
        <app-card
          src=""
          itemName="いちご"
          itemDetail="新鮮ないちご"
          itemPrice="300円"
        />

        <app-card
          src=""
          itemName="ばなな"
          itemDetail="美味しいばなな"
          itemPrice="300円"
        />
      </div>
      <div class="md:flex md:my-16">
        <app-card
          src=""
          itemName="トマト"
          itemDetail="新鮮なトマト"
          itemPrice="300円"
        />
        <app-card
          src=""
          itemName="野菜"
          itemDetail="美味しい野菜"
          itemPrice="300円"
        />
        <app-card
          src=""
          itemName="いちじく"
          itemDetail="美味しいいちじく"
          itemPrice="300円"
        />
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppCard from "@/components/AppCard.vue";
// import HelloWorld from '@/components/HelloWorld.vue';
// @ is an alias to /src
export default defineComponent({
  name: "Home",
  components: {
    AppCard,
    AppHeader,
    AppFooter,
  },
  setup() {
    const store = useStore();
    return {
      // state を呼び出す場合
      count: computed(() => store.state.count),
      // getters を呼び出す場合
      double: computed(() => store.getters.double),
      // mutation を呼び出す場合
      increment: () => store.commit("increment"),
      // action を呼び出す場合
      asyncIncrement: () => store.dispatch("asyncIncrement"),
    };
  },
});
</script>

<style scoped>
.bg-fruit {
  background: url(../assets/img_main_visual.jpg) no-repeat center;
  background-attachment: fixed;
  background-size: 1600px 1600px;
}
</style>
