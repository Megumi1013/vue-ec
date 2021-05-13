<template>
  <div class="home">
    <public-header></public-header>

    <div>
      <h1 class="text-3xl text-gray-500 my-14">PRODUCE</h1>
    </div>

    <div class="w-9/12 mx-auto">
      <div class="px-10 py-7 text-left">
        <div class="flex">
          <h1 class="text-xl">{{ produceItem.name }}</h1>
        </div>

        <div class="flex justify-center">
          <div class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"></div>
        </div>

        <div class="my-12">
          {{ produceItem.description }}
        </div>
        <div class="my-12">
          {{ produceItem.price }}
        </div>

        <div class="flex">
          <p>この商品のレビュー</p>
          <public-modal> レビューを登録 </public-modal>
        </div>
        <div v-if="reviewItems.length > 0">
          <table class="w-full my-3">
            <thead>
              <tr class="border-gray-200">
                <th class="p-2">星の数</th>
                <th class="p-2">内容</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(review, reviewIndex) in reviewItems" :key="reviewIndex">
                <td class="p-2">
                  {{ review.stars }}
                </td>
                <td class="p-2">{{ review.content }}</td>
                <td class="p-2">{{ review.created_at }}</td>
                <td class="p-2">
                  <public-button class="mr-3">削除</public-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="alert-light">レビューが登録されていません。</div>

        <!--        <div class="flex items-center">-->
        <!--          <button @click="setNewItem" class="btn btn-primary">登録</button>-->
        <!--          &lt;!&ndash;            <dashboard-button @handleClick="setNewItem">登録</dashboard-button>&ndash;&gt;-->
        <!--        </div>-->
      </div>
    </div>

    <public-footer></public-footer>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, onMounted } from "vue"
import { useStore } from "vuex"
import PublicHeader from "@/components/public/PublicHeader.vue"
import PublicFooter from "@/components/public/PublicFooter.vue"
import PublicCard from "@/components/public/PublicCard.vue"
import { Produce } from "@/types"

// type ComponentState = {
//   item: Produce | null
// }

export default defineComponent({
  name: "itemDetails",

  components: {
    PublicHeader,
    PublicFooter,
    // PublicCard,
  },
  props: {
    id: {
      type: Number,
      required: false,
    },
  },

  setup() {
    const store = useStore()

    // const state: ComponentState = reactive<ComponentState>({
    //   item: {
    //     name: "",
    //     description: "",
    //     price: null,
    //     is_disabled: false,
    //   },
    // })

    const getAndSetReviewItems = async () => {
      await store.dispatch("produce/getAndSetReviews")
    }

    onMounted(() => {
      getAndSetReviewItems()
      // getAndSetItem()
    })

    return {
      produceItem: computed(() => store.state.produce.item),
      reviewItems: computed(() => store.state.produce.reviews),
      // state,
    }
  },
})
</script>

<style scoped></style>
