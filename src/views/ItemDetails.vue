<!--<template>-->
<!--  <div class="home">-->
<!--    <app-header></app-header>-->
<!--    <div class="bg-fruit h-80"></div>-->
<!--    <div>-->
<!--      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>-->
<!--    </div>-->

<!--    <div v-if="produceItems.length > 0" class="w-9/12 mx-auto">-->
<!--      <div-->
<!--        v-for="(item, itemIndex) in produceItems"-->
<!--        :key="itemIndex"-->
<!--        class="md:flex md:my-16"-->
<!--      >-->
<!--        <app-card-->
<!--          :itemName="item.name"-->
<!--          :itemDetail="item.description"-->
<!--          :itemPrice="item.price"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-else-if="produceItems.length === 0">商品を準備中です。</div>-->
<!--    <app-footer></app-footer>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { reactive, computed, defineComponent, onMounted } from "vue";-->
<!--import { useStore } from "vuex";-->
<!--import AppHeader from "@/components/AppHeader.vue";-->
<!--import AppFooter from "@/components/AppFooter.vue";-->
<!--import AppCard from "@/components/AppCard.vue";-->
<!--import { Produce } from "@/store/modules/produce";-->
<!--// import HelloWorld from '@/components/HelloWorld.vue';-->
<!--// @ is an alias to /src-->

<!--type ComponentState = {-->
<!--  produceItems: Produce[];-->
<!--};-->

<!--export default defineComponent({-->
<!--  name: "Home",-->

<!--  components: {-->
<!--    AppCard,-->
<!--    AppHeader,-->
<!--    AppFooter,-->
<!--  },-->

<!--  setup() {-->
<!--    const store = useStore();-->

<!--    // Get Produce Items-->

<!--    const getAndSetProduceItems = async () => {-->
<!--      await store.dispatch("produce/getAndSetItems");-->
<!--    };-->

<!--    onMounted(getAndSetProduceItems);-->

<!--    return {-->
<!--      produceItems: computed(() => store.state.produce.items),-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

<!--<style scoped></style>-->
