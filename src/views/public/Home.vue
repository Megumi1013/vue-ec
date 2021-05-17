<template>
  <div class="home">
    <public-header></public-header>
    <div class="bg-fruit h-80"></div>
    <div>
      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>
    </div>

    <div v-if="produceItems.length > 0" class="w-9/12 mx-auto">
      <div v-for="(item, itemIndex) in produceItems" :key="itemIndex" class="md:flex md:my-16">
        <public-card
          :itemName="item.name"
          :itemDetail="item.description"
          :itemPrice="item.price"
          :routerLink="`/item/${item.id}`"
        />
      </div>
    </div>
    <div v-else-if="produceItems.length === 0">商品を準備中です。</div>
    <public-footer></public-footer>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, onMounted } from "vue"
import { useStore } from "vuex"
import PublicHeader from "@/components/public/PublicHeader.vue"
import PublicFooter from "@/components/public/PublicFooter.vue"
import PublicCard from "@/components/public/PublicCard.vue"
import { Product } from "@/types"
// import HelloWorld from '@/components/HelloWorld.vue';
// @ is an alias to /src

type ComponentState = {
  produceItems: Product[]
}

export default defineComponent({
  name: "Home",

  components: {
    // PublicCard,
    PublicHeader,
    PublicFooter,
  },

  setup() {
    const store = useStore()

    // Get Produce Items

    const state: ComponentState = reactive<ComponentState>({
      produceItems: store.state.produce.items,
    })

    // Get Produce Items

    const getAndSetProduceItems = async () => {
      await store.dispatch("produce/getAndSetItems")
    }

    onMounted(() => {
      getAndSetProduceItems()
    })

    return {
      produceItems: computed(() => store.state.produce.items),
      state,
    }
  },
})
</script>

<style scoped></style>
