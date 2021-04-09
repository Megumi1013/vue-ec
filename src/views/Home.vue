<template>
  <div class="home">
    <app-header></app-header>
    <div class="bg-fruit h-80"></div>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>
    </div>
    <div class="w-9/12 mx-auto">
      <div
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        class="md:flex md:my-16"
      >
        <app-card
          src=""
          itemName="にんじん"
          itemDetail="美味しいにんじんにんじん"
          itemPrice="300円"
        />
        {{ item }}
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppCard from "@/components/AppCard.vue";
import { State } from "@/store/modules/items";
// import HelloWorld from '@/components/HelloWorld.vue';
// @ is an alias to /src

type ComponentState = State;

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
      items: computed(() => store.state.items),
      // getters を呼び出す場合
      // double: computed(() => store.getters.double),
      // mutation を呼び出す場合
      // increment: () => store.commit("increment"),
      // action を呼び出す場合
      // asyncIncrement: () => store.dispatch("asyncIncrement"),
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
