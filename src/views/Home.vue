<template>
  <div class="home">
    <app-header></app-header>
    <div class="bg-fruit h-80"></div>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>
    </div>
    <div class="w-9/12 mx-auto">
      <div
        v-for="(item, itemIndex) in produceItems"
        :key="itemIndex"
        class="md:flex md:my-16"
      >
        <app-card
          :itemName="item.name"
          :itemDetail="item.description"
          :itemPrice="item.price"
        />
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppCard from "@/components/AppCard.vue";
import { State } from "@/store/modules/produce";
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

    // Get Produce Items

    const getAndSetProduceItems = async () => {
      await store.dispatch("produce/getAndSetItems");
    };

    onMounted(getAndSetProduceItems);

    return {
      produceItems: computed(() => store.state.produce.items),
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
